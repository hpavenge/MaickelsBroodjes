import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { Truculenta } from 'next/font/google'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const password = process.env.UPLOAD_PASSWORD?.trim()
    if (!password) {
      return NextResponse.json({ error: 'Server password not set' }, { status: 500 })
    }

    const formData = await request.formData()
    const incomingPassword = (formData.get('password') as string | null)?.trim()
    const file = formData.get('file') as File | null

    if (!incomingPassword || incomingPassword !== password) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Optional: basic file type check
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image uploads allowed' }, { status: 400 })
    }

    // Overwrite the same key every time:
    const blob = await put('weekschema.jpg', file, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
    })

    return NextResponse.json({ success: true, url: blob.url })
  } catch (err: any) {
    console.error('Upload failed:', err)
    return NextResponse.json(
      { error: 'Upload failed', detail: err?.message ?? String(err) },
      { status: 500 }
    )
  }
}
