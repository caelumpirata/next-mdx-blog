import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'List of all blog posts',
}

export default function BlogPage() {
  const posts = getSortedPostsData()
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <small>{post.date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}