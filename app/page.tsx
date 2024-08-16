import { Posts } from '@/components/posts';
import { getPosts } from '@/app/posts';
import Link from 'next/link';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>home</h1>
      <Link href="/blog">blog</Link>
     
    </main>
  );
}
