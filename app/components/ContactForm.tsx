'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        className="w-full p-3 text-black rounded"
        type="text"
        placeholder="Naam"
        name="name"
        required
      />
      <input
        className="w-full p-3 text-black rounded"
        type="email"
        placeholder="E-mail"
        name="email"
        required
      />
      <textarea
        className="w-full p-3 text-black rounded"
        placeholder="Bericht"
        rows={5}
        name="message"
        required
      ></textarea>
      <button
        className="px-5 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Versturen...' : 'Verstuur'}
      </button>
      {status === 'success' && <p className="text-green-400">Bedankt! Je bericht is verzonden.</p>}
      {status === 'error' && <p className="text-red-400">Er ging iets mis. Probeer het later opnieuw.</p>}
    </form>
  )
}
