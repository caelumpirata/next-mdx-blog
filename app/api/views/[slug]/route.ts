import { redis } from '@/lib/redis'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 60 // revalidate this API route every 60 seconds

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const views = await redis.incr(`pageviews:${slug}`)
  return NextResponse.json({ views })
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const views = await redis.get<number>(`pageviews:${slug}`) || 0
  return NextResponse.json({ views }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  })
}