import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ["500"],
  variable: '--font-ibm'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibm.variable} bg-neutral-900`}>
        <Header/>
        {children}</body>
    </html>
  )
}