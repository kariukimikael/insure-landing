import type { Metadata } from 'next'
import './globals.css'
import { Footer, Header } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Insure Landing Page',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-screen h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
