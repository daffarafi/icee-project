import { RegisterContextProvider } from '@contexts'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@elements'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'ICEE 2024 | Engineered Collaboration',
  description:
    'ITB Civil Engineering Expo (ICEE) is an annual event organized by the Civil Engineering Student Association (Himpunan Mahasiswa Sipil ITB) which is present as a forum for collaboration for students in developing themselves through various events that are integrated with the technical issues raised.',
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
        <Toaster />
      </body>
    </html>
  )
}
