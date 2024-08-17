import Link from 'next/link'
import { Post } from '../lib/posts'

export default function PostList({ posts }: { posts: Post[] }) {
  return (


    <div className='font-mono'>
    {/* Header with labels */}
    <div className="flex mb-2">
      <span className="w-1/2 px-2 text-sm font-semibold text-gray-600 dark:text-gray-700">title</span>
      <span className="w-1/2  px-2 text-sm font-semibold text-gray-600 dark:text-gray-700 text-right">date</span>
    </div>
   

    <ul>
      {posts.map((post) => (
        <li 
        className="rounded hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]  border-y border-gray-200 dark:border-[#313131]"
        key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
          <div className="flex justify-between items-center">

            <h2>{post.title}</h2>
            <small>{post.date}</small>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}