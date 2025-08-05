import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['600'], // SemiBold
})

  export const metadata = {
  title: 'Maickels Broodjes',
  description:
    'Even voorstellen: Mijn naam is Maickel Bouw en woonachtig in Beek en Donk. Horeca is mijn passie, daarin ben ik al zowat mijn hele leven werkzaam.',
      icons: {
    icon: '/favicon.png', // or '/favicon.png', '/favicon.svg'
  },
    openGraph: {
    title: 'Maickels Broodjes',
    description:
      'Even voorstellen: Mijn naam is Maickel Bouw en woonachtig in Beek en Donk. Horeca is mijn passie, daarin ben ik al zowat mijn hele leven werkzaam.',
    url: 'https://www.maickelsbroodjes.nl',
    siteName: 'Maickels Broodjes',
    images: [
      {
        url: '/hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'Maickels Broodjes Hero Image',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
