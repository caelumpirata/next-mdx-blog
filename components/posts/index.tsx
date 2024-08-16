import { Post } from '@/app/posts';
import Link from 'next/link';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{' '}
            {new Date(publishDate).toLocaleDateString()}{' '}
          </p>
        </li>
      ))}
    </ol>
  );
}