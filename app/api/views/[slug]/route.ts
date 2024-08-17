// import { redis } from '@/lib/redis'
// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(
//   request: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug
//   const views = await redis.incr(`pageviews:${slug}`)
//   return NextResponse.json({ views })
// }

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug
//   const views = await redis.get<number>(`pageviews:${slug}`) || 0
//   return NextResponse.json({ views })
// }

import { redis } from '@/lib/redis'
import { NextRequest, NextResponse } from 'next/server'

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
  return NextResponse.json({ views })
}