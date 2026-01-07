'use client'

import { FormEvent, useState } from 'react'

export default function UploadSchema() {
  const [password, setPassword] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)

    if (!file) {
      setStatus('Kies een afbeelding om te uploaden.')
      return
    }

    setLoading(true)
    const form = new FormData()
    form.append('password', password)
    form.append('file', file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: form,
    })

    const data = await res.json()
    if (!res.ok) {
      setStatus(data.error || 'Upload mislukt.')
    } else {
      setStatus('Upload gelukt! Vernieuw de pagina om het nieuwe schema te zien.')
    }
    setLoading(false)
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Upload wekelijks schema</h1>
      <p className="text-sm text-gray-200 mb-6">Beschermd met wachtwoord. Upload één afbeelding; deze wordt opgeslagen als weekschema.jpg en direct gebruikt op de site.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Wachtwoord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-black/40 border border-white/30 focus:border-white outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Afbeelding (JPG/PNG)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded bg-white text-black font-semibold disabled:opacity-60"
        >
          {loading ? 'Bezig met uploaden…' : 'Uploaden'}
        </button>
      </form>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </section>
  )
}



