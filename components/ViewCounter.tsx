'use client'

import useSWR from 'swr'
import { useEffect } from 'react'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function ViewCounter({ slug, initialViews }: { slug: string, initialViews: number }) {
  const { data, mutate } = useSWR(`/api/views/${slug}`, fetcher, {
    fallbackData: { views: initialViews }
  })

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, { method: 'POST' })
        const data = await response.json()
        mutate(data, false) // Update the local data without revalidation
      } catch (error) {
        console.error('Failed to increment views:', error)
      }
    }
    incrementViews()
  }, [slug, mutate])

  return <p>{data.views} view{data.views === 1 ? '' : 's'}</p>
}
