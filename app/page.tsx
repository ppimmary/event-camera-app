'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/brand'

const steps = [
  { n: '01', title: 'Host', sub: 'Set the night', detail: 'Name + reveal time' },
  { n: '02', title: 'Scan', sub: 'QR or link', detail: 'No app' },
  { n: '03', title: 'Shoot', sub: 'Limited frames', detail: 'Per guest' },
  { n: '04', title: 'Drop', sub: 'Album opens', detail: 'Everyone at once' },
] as const

export default function HomePage() {
  return (
    <main className="min-h-dvh fade-in">
      <div className="page-wrap py-10 pb-16">
        <p className="callout-yellow inline-block">Not your average event cam</p>

        <h1
          className="text-[2.75rem] sm:text-5xl font-black leading-[1.02] mt-6 tracking-tight"
          style={{ color: 'var(--foreground)' }}
        >
          {BRAND.name}
        </h1>
        <p className="text-lg font-semibold mt-3" style={{ color: 'var(--green)' }}>
          {BRAND.tagline}
        </p>
        <p className="text-base mt-4 leading-relaxed muted max-w-sm">
          Extra photos. Zero spoilers. Guests scan a QR, shoot their frames, and the whole
          album unlocks when you say go.
        </p>

        <Link href="/create" className="btn-primary w-full sm:w-auto mt-8">
          Start a roll →
        </Link>

        <p className="band-green mt-12 mb-4">The do-it-all flow</p>
        <ul className="flex flex-col gap-2.5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="flow-row"
              style={{
                background: i === 3 ? 'var(--yellow)' : i % 2 === 0 ? 'var(--green)' : 'var(--ink)',
                color: i === 3 || i % 2 === 0 ? (i === 3 ? 'var(--ink)' : '#fff') : '#fff',
                border: i === 3 ? '3px solid var(--ink)' : 'none',
              }}
            >
              <div>
                <span className="text-base">{s.n} · {s.title}</span>
                <span className="block text-xs font-semibold opacity-85">{s.sub}</span>
              </div>
              <span className="text-sm">{s.detail}</span>
            </li>
          ))}
        </ul>

        <p className="card mt-8 p-4 text-sm font-semibold leading-relaxed">
          One QR gets the whole room shooting — limited frames per person, one shared reveal.
        </p>

        <footer className="text-center mt-12 text-sm muted">
          {BRAND.name} · no download required
        </footer>
      </div>
    </main>
  )
}
