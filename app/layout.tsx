import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
