import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MC Share',
  description: 'For the MC sharing app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
