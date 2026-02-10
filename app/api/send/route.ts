import { Resend } from 'resend'
import { EmailTemplate } from '../../components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, message } = body

  try {
    const { data, error } = await resend.emails.send({
      from: 'Maickels Broodjes <noreply@maickelsbroodjes.nl>',
      to: ['info@mbfoodpassion.nl'],
      subject: 'Nieuw bericht via contactformulier',
      react: EmailTemplate({ name, email, phone, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
