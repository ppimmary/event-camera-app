'use client'

import Link from 'next/link'
import { Camera, Clock, Users, ImageIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-dvh">

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center fade-in">
        <div className="mb-8 relative">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <Camera size={40} style={{ color: 'var(--accent)' }} />
          </div>
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: '1px solid var(--accent)', opacity: 0.2, transform: 'scale(1.3)' }}
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>
          Once
        </h1>
        <p className="text-xl mb-3" style={{ color: 'var(--accent)' }}>
          Disposable Camera for Your Events
        </p>
        <p className="text-base max-w-sm mb-12 leading-relaxed" style={{ color: '#888' }}>
          Everyone takes photos. Nobody sees them until the moment you choose.
          Then — reveal everything, all at once.
        </p>

        <Link
          href="/create"
          className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95"
          style={{ background: 'var(--accent)', color: '#0d0d0d' }}
        >
          Create an Event
        </Link>
      </section>

      <section className="px-6 py-16" style={{ borderTop: '1px solid var(--border)' }}>
        <h2
          className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
          style={{ color: '#666' }}
        >
          How it works
        </h2>

        <div className="max-w-sm mx-auto flex flex-col gap-8">
          <Step
            icon={<Camera size={20} />}
            title="Host creates an event"
            description="Set a name, shot limit per person, and a reveal time."
          />
          <Step
            icon={<Users size={20} />}
            title="Guests join via link or QR code"
            description="No app download needed — it works right in the browser."
          />
          <Step
            icon={<ImageIcon size={20} />}
            title="Everyone takes their shots"
            description="Each person gets a limited number of photos, just like a disposable camera."
          />
          <Step
            icon={<Clock size={20} />}
            title="Photos reveal together"
            description="At the time you chose, all photos unlock at once for everyone to see."
          />
        </div>
      </section>

      <footer className="text-center py-8 text-sm" style={{ color: '#444' }}>
        Made with care · Once
      </footer>
    </main>
  )
}

function Step({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--accent)' }}
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>{title}</p>
        <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{description}</p>
      </div>
    </div>
  )
}
