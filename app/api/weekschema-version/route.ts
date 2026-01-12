import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  return NextResponse.json(
    { v: Date.now() },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  )
}
