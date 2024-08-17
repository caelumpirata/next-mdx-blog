import fs from 'fs'
import path from 'path'

export interface Post {
  slug: string
  title: string
  date: string
}

const postsDirectory = path.join(process.cwd(), 'app/blog')

export function getSortedPostsData(): Post[] {
  // Get file names under /app/blog
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName): Post => {
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

      // Combine the data with the slug
      return {
        slug,
        title: metadata.title,
        date: metadata.date,
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}