import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.5 }}>
      <h2>Nieuw bericht via MaickelsBroodjes.nl</h2>
      <p><strong>Naam:</strong> {name}</p>
      <p><strong>E-mailadres:</strong> {email}</p>
      <p><strong>Bericht:</strong></p>
      <p style={{ whiteSpace: 'pre-line' }}>{message}</p>
    </div>
  )
}
