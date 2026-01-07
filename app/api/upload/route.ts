import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  // Trim to avoid accidental whitespace/newlines in env files or form values
  const password = process.env.UPLOAD_PASSWORD?.trim()

  const formData = await request.formData()
  const incomingPassword = (formData.get('password') as string | null)?.trim()
  const file = formData.get('file') as File | null

  if (!password) {
    return NextResponse.json({ error: 'Server password not set' }, { status: 500 })
  }

  if (!incomingPassword || incomingPassword !== password) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const targetPath = path.join(process.cwd(), 'public', 'weekschema.jpg')

  await writeFile(targetPath, buffer)

  return NextResponse.json({ success: true, message: 'Schema updated' })
}

