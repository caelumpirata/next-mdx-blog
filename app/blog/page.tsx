import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function BlogPage() {
  const posts = await getSortedPostsData()
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, title, date, views }) => (
          <li key={slug} className=" p-4 rounded-md dark:hover:bg-[#313131] transition-colors">
            <Link href={`/blog/${slug}`}>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span className="text-sm text-gray-500">{views} view{views === 1 ? '' : 's'}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}