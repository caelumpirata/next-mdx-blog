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
      description: post.description,
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
        <h1 className="mx-4 text-base dark:text-[#EFEFEF]">{post.title}</h1>
        <p className="mx-4 ext-gray-600 text-sm dark:text-[#A3A3A3] mb-8">{post.formattedDate}</p>
        <div className="mt-8 [&>h1:first-child]:hidden text-sm">
          <PostContent />
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}