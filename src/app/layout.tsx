import { RegisterContextProvider } from '@contexts'
import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@elements'

export const metadata: Metadata = {
  title: 'ICEE Project',
  description: 'ICEE Project',
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'text-white font-Montserrat'}>
        <Navbar />
        <main className="min-h-screen bg-[#2c3531]">
          <RegisterContextProvider>{children}</RegisterContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
