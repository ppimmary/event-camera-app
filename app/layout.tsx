import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'
import './globals.css'

export const metadata: Metadata = {
  title: `${BRAND.name} — Event photo drop`,
  description: BRAND.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  )
}
