import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'List of all blog posts',
}

export default function BlogPage() {
  const posts = getSortedPostsData()
  return (
    <div>
      <h1 className="text-base	mx-4  mb-8">Blog</h1>
      <ul className='flex flex-col gap-6 place-items-stretch'>
        {posts.map((post) => (
          <li key={post.slug} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden border border-fake-grey">
            <Link href={`/blog/${post.slug}`} className="block p-4 hover:bg-gray-50 dark:hover:bg-black transition duration-150 ease-in-out">
              <div className="flex justify-between items-center">
                <div className="text-sm ">{post.title}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{post.formattedDate}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}