// 'use client'

// import { useState, useEffect } from 'react'

// export default function ViewCounter({ slug }: { slug: string }) {
//   const [views, setViews] = useState(0)

//   useEffect(() => {
//     const incrementViews = async () => {
//       try {
//         const response = await fetch(`/api/views/${slug}`, { method: 'POST' })
//         const data = await response.json()
//         setViews(data.views)
//       } catch (error) {
//         console.error('Failed to increment views:', error)
//       }
//     }
//     incrementViews()
//   }, [slug])

//   return <p>{views} views</p>
// }

'use client'

import { useState, useEffect } from 'react'

export default function ViewCounter({ slug, initialViews }: { slug: string, initialViews: number }) {
  const [views, setViews] = useState(initialViews)

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, { method: 'POST' })
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error('Failed to increment views:', error)
      }
    }
    incrementViews()
  }, [slug])

  return <p>{views} view{views === 1 ? '' : 's'}</p>
}