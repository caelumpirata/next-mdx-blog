import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostData, getAllPostSlugs } from '../../../lib/posts'

interface PostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug)
    return { 
      title: post.title,
      description: `This is the page for ${post.title}`
    }
  } catch (error) {
    return { title: 'Post Not Found' }
  }
}

export default async function Post({ params }: PostProps) {
  try {
    const post = await getPostData(params.slug)
    // const PostContent = (await import(`../${params.slug}.mdx`)).default
    const PostContent = (await import(`../../../posts/${params.slug}.mdx`)).default //moving all the posts outside /app/blog

    return (
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <h1 className="text-base">{post.title}</h1>
        <p className="text-gray-600 text-sm dark:text-gray-400 mb-8">{post.formattedDate}</p>
        <div className="mt-8 [&>h1:first-child]:hidden text-sm">
          <PostContent />
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}