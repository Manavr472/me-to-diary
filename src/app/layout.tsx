import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Crimson_Text, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

const crimson = Crimson_Text({ 
  subsets: ['latin'], 
  variable: '--font-crimson',
  display: 'swap',
  weight: ['400', '600', '700']
})

const dancing = Dancing_Script({ 
  subsets: ['latin'], 
  variable: '--font-dancing',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Me to Dairy - Sundays for Self Reflection',
  description: 'A weekly community gathering for emotional exploration, authentic storytelling, and meaningful self-reflection. Join our Sunday cohorts for personal growth and connection.',
  keywords: 'self-reflection, emotional wellness, community, sunday gatherings, personal growth, authentic storytelling, mental health',
  authors: [{ name: 'Me to Dairy Community' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0F' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${crimson.variable} ${dancing.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
