
import './globals.css' 

import { Afacad, Judson, Petit_Formal_Script } from 'next/font/google'

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-afacad',
})

const judson = Judson({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-judson',
})

const petitFormal = Petit_Formal_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='it' data-scroll-behavior="smooth" className={`${afacad.variable} ${judson.variable} ${petitFormal.variable}`}>
      <body>{children}</body>
    </html>
  )
}