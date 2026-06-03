import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Once — Disposable Camera',
  description: 'Capture your event together. Reveal it all at once.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
