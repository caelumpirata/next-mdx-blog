import { Posts } from '@/components/posts';
import { getPosts } from '@/app/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <hr></hr>
      <Posts posts={posts} />
    </main>
  );
}
