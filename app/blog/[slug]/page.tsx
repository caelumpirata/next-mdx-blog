// import { notFound } from 'next/navigation'
// import { Metadata } from 'next'
// import ViewCounter from '@/components/ViewCounter'

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
//     return (
//       <article>
//         <PostContent />
//         <ViewCounter slug={params.slug} />
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

export default async function Post({ params }: PostProps) {
  try {
    const PostContent = (await import(`../${params.slug}.mdx`)).default
    const views = await redis.get<number>(`pageviews:${params.slug}`) || 0

    return (
      <article>
        <PostContent />
        <ViewCounter slug={params.slug} initialViews={views} />
      </article>
    )
  } catch (error) {
    notFound()
  }
}