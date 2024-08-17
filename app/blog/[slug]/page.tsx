// import { notFound } from 'next/navigation'
// import { Metadata } from 'next'
// import ViewCounter from '@/components/ViewCounter'
// import { redis } from '@/lib/redis'

// interface PostProps {
//   params: {
//     slug: string
//   }
// }

// export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
//   try {
//     const post = await import(`../${params.slug}.mdx`)
//     return { 
//       title: post.metadata.title,
//       description: `This is the page for ${post.metadata.title}`
//     }
//   } catch (error) {
//     console.error(error)
//     return { title: 'Post Not Found' }
//   }
// }

// export default async function Post({ params }: PostProps) {
//   try {
//     const PostContent = (await import(`../${params.slug}.mdx`)).default
//     const views = await redis.get<number>(`pageviews:${params.slug}`) || 0
//     const { metadata } = await import(`../${params.slug}.mdx`)

//     return (
//       <article className="max-w-2xl mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
//         <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
//           <span>{metadata.date}</span>
//           <ViewCounter slug={params.slug} initialViews={views} />
//         </div>
//         <div className="prose max-w-none">
//           <PostContent />
//         </div>
//       </article>
//     )
//   } catch (error) {
//     notFound()
//   }
// }

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ViewCounter from '@/components/ViewCounter'
import { redis } from '@/lib/redis'
import fs from 'fs'
import path from 'path'

interface PostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  try {
    const post = await import(`../${params.slug}.mdx`)
    return { 
      title: post.metadata.title,
      description: `This is the page for ${post.metadata.title}`
    }
  } catch (error) {
    console.error(error)
    return { title: 'Post Not Found' }
  }
}

// Use getStaticParams to generate static paths
export async function getStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app')
  const filenames = fs.readdirSync(postsDirectory)
  
  const paths = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
    }))

  return paths
}

export default async function Post({ params }: PostProps) {
  try {
    const PostContent = (await import(`../${params.slug}.mdx`)).default
    const views = await redis.get<number>(`pageviews:${params.slug}`) || 0
    const { metadata } = await import(`../${params.slug}.mdx`)

    return (
      <article className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <span>{metadata.date}</span>
          <ViewCounter slug={params.slug} initialViews={views} />
        </div>
        <div className="prose max-w-none">
          <PostContent />
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}
