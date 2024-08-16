import { Post } from '@/app/posts';
import Link from 'next/link';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className='font-mono'>
      {/* Header with labels */}
      <div className="flex mb-2">
        <span className="w-1/2 px-2 text-sm font-semibold text-gray-600 dark:text-gray-700">Title</span>
        <span className="w-1/2  px-2 text-sm font-semibold text-gray-600 dark:text-gray-700 text-right">Date</span>
      </div>

      {/* List of posts */}
      <ol>
        {posts.map(({ slug, title, publishDate }) => (
          <li 
            key={slug} 
            className="rounded hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]  border-y border-gray-200 dark:border-[#313131]"
          >
            <Link href={`/blog/${slug}`} passHref>
              <div className="flex justify-between items-center">
                <h2 className=" w-1/2">{title}</h2>
                <p className="text-sm text-gray-600 w-1/2 text-right">
                  {new Date(publishDate).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
