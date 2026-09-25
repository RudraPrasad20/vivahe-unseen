import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vivahe Unseen — Wedding Content Creators',
  description: 'India\'s wedding content creators for the moments between the moments.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f9e4e8', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
