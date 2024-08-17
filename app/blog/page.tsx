import { getSortedPostsData } from '../../lib/posts'
import PostList from '../../components/PostList'

export default function BlogPage() {
  const posts = getSortedPostsData()
  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-1 dark:text-gray-100" >Blog</h1> */}
      <PostList posts={posts} />
    </div>
  )
}