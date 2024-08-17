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
    const PostContent = (await import(`../${params.slug}.mdx`)).default
    return (
      <article>
        <h1>{post.title}</h1>
        <PostContent />
      </article>
    )
  } catch (error) {
    notFound()
  }
}