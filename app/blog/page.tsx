import { Posts } from '@/components/posts';
import { getPosts } from '@/app/posts';
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Caelum Pirata's blog",
  description: "SWE",
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
}
