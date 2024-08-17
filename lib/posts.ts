import fs from 'fs'
import path from 'path'
import { redis } from './redis'

export interface Post {
  slug: string
  title: string
  date: string
  views: number
}

const postsDirectory = path.join(process.cwd(), 'app/blog')

export async function getSortedPostsData(): Promise<Post[]> {
  // Get file names under /app/blog
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(async (fileName): Promise<Post> => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read MDX file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Extract metadata from the top of the MDX file
      const metadataMatch = fileContents.match(/export const metadata = ({[\s\S]*?});/)
      if (!metadataMatch) {
        throw new Error(`No metadata found in ${fileName}`)
      }
      const metadata = eval(`(${metadataMatch[1]})`)

      // Get view count from Redis
      const views = await redis.get<number>(`pageviews:${slug}`) || 0

      // Combine the data with the slug and views
      return {
        slug,
        title: metadata.title,
        date: metadata.date,
        views
      }
    }))

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}