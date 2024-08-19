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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 bg-gray-100 dark:bg-black">
          <h1 className=" mx-4 mb-1 dark:text-[#EFEFEF]">{post.title}</h1>
          <p className="mx-4  mb-5 text-gray-600 dark:text-[#A3A3A3] mb-4">{post.formattedDate}</p>
          {/* <p className=" mx-4  mb-5 text-gray-600 dark:text-[#A3A3A3] italic">{post.description}</p> */}
        </div>
        <div className="lg:col-span-2">
          <article className="prose lg:prose-xl dark:prose-invert">
            <div>
              <PostContent />
            </div>
          </article>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
