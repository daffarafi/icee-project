import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICEE Project',
  description: 'ICEE Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'text-white font-Montserrat'}>
        <main className="min-h-screen bg-[#2c3531]">{children}</main>
      </body>
    </html>
  )
}
