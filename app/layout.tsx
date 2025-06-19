import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['600'], // SemiBold
})

export const metadata = {
  title: 'Maickels Broodjes',
  description: 'Verse broodjes op vaste plekken in de stad',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
