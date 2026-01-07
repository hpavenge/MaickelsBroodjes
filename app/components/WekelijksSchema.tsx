'use client'

export default function WekelijksSchema() {

  return (
    <section id="locaties" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">📅 Schema</h2>
      <br />

      <div className="mb-10">
        <figure className="border border-white/30 rounded-lg overflow-hidden bg-black/20">
          <img
              src={`https://f1ngm7zxkekrdydv.public.blob.vercel-storage.com/weekschema.jpg?v=${Date.now()}`}
              alt="Wekelijks schema zoals geplaatst op socials"
              className="w-full h-auto object-contain"
            />
          <figcaption className="p-3 text-sm text-gray-200 bg-black/40">Wekelijks schema</figcaption>
        </figure>
      </div>

    </section>
  )
}
