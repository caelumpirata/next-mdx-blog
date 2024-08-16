import { readdir } from "fs/promises";

export interface Post {
    slug: string;
    title: string;
    publishDate: string;
  }

  
export async function getPosts(): Promise<Post[]> {
    // Retreive slugs from post routes
    const slugs = (
      await readdir("./app/blog", { withFileTypes: true })
    ).filter((dirent) => dirent.isDirectory());
  
    // Retreive metadata from MDX files
    const posts = await Promise.all(
      slugs.map(async ({ name }) => {
        const { metadata } = await import(`/app/blog/${name}/page.mdx`);
        return { slug: name, ...metadata };
      })
    );
  
    // Sort posts from newest to oldest
    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
  
    return posts;
  }