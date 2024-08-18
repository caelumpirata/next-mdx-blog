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
      <ul className='flex flex-col gap-6 '>
        {posts.map((post) => (
          <li key={post.slug} className="bg-white dark:bg-black rounded-lg  overflow-hidden border hover:border-fake-grey dark:border-fake-grey dark:hover:border-white border-[#e0e0e0] transition duration-150 ease-in-out">
            <Link href={`/blog/${post.slug}`} className="block p-4 dark:hover:bg-black">
              <div className="flex justify-between items-center">
                <div className="text-sm dark:text-[#EFEFEF]">{post.title}</div>
                <div className="text-xs text-gray-600 dark:text-[#A3A3A3]">{post.formattedDate}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}