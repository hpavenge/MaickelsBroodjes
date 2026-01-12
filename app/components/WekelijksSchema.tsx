'use client'

import { useEffect, useState } from 'react'

const BASE_URL =
  'https://f1ngm7zxkekrdydv.public.blob.vercel-storage.com/weekschema.jpg'

export default function WekelijksSchema() {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/weekschema-version', { cache: 'no-store' })
      const data = await res.json()
      setUrl(`${BASE_URL}?v=${data.v}`)
    }
    load()
  }, [])

  return (
    <section id="locaties" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">📅 Schema</h2>
      <br />

      <div className="mb-10">
        <figure className="border border-white/30 rounded-lg overflow-hidden bg-black/20">
          {url ? (
            <img
              src={url}
              alt="Wekelijks schema zoals geplaatst op socials"
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="p-6 text-sm text-gray-200">Schema laden…</div>
          )}
          <figcaption className="p-3 text-sm text-gray-200 bg-black/40">
            Wekelijks schema
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
