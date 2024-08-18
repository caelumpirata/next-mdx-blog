import fs from 'fs'
import path from 'path'

export interface Post {
  slug: string
  title: string
  date: string
  formattedDate: string

}

const postsDirectory = path.join(process.cwd(), 'posts')

// export function getSortedPostsData(): Post[] {
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames
//     .filter(fileName => fileName.endsWith('.mdx'))
//     .map((fileName): Post => {
//       const slug = fileName.replace(/\.mdx$/, '')
//       const fullPath = path.join(postsDirectory, fileName)
//       const fileContents = fs.readFileSync(fullPath, 'utf8')

//       const metadataMatch = fileContents.match(/export const metadata = ({[\s\S]*?});/)
//       if (!metadataMatch) {
//         throw new Error(`No metadata found in ${fileName}`)
//       }
//       const metadata = eval(`(${metadataMatch[1]})`)

//       return {
//         slug,
//         title: metadata.title,
//         date: metadata.date,
//       }
//     })

//   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
// }

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
}


export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName): Post => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const metadataMatch = fileContents.match(/export const metadata = ({[\s\S]*?});/)
      if (!metadataMatch) {
        throw new Error(`No metadata found in ${fileName}`)
      }
      const metadata = eval(`(${metadataMatch[1]})`)

      return {
        slug,
        title: metadata.title,
        date: metadata.date,
        formattedDate: formatDate(metadata.date)
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => ({
    params: {
      slug: fileName.replace(/\.mdx$/, '')
    }
  }))
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const metadataMatch = fileContents.match(/export const metadata = ({[\s\S]*?});/)
  if (!metadataMatch) {
    throw new Error(`No metadata found in ${slug}.mdx`)
  }
  const metadata = eval(`(${metadataMatch[1]})`)

  return {
    slug,
    title: metadata.title,
    date: metadata.date,
    formattedDate: formatDate(metadata.date)
  }
}