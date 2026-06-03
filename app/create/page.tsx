'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { createEvent } from '@/lib/events'

const DEFAULT_SHOT_LIMIT = 12

function toDatetimeLocalValue(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function defaultRevealAt() {
  const d = new Date()
  d.setHours(d.getHours() + 4, 0, 0, 0)
  return toDatetimeLocalValue(d)
}

export default function CreateEventPage() {
  const router = useRouter()
  const [hostName, setHostName] = useState('')
  const [eventName, setEventName] = useState('')
  const [shotLimit, setShotLimit] = useState(DEFAULT_SHOT_LIMIT)
  const [revealAt, setRevealAt] = useState(defaultRevealAt)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmedHost = hostName.trim()
    const trimmedEvent = eventName.trim()
    if (!trimmedHost || !trimmedEvent) {
      setError('Please enter your name and an event name.')
      return
    }

    if (shotLimit < 1 || shotLimit > 99) {
      setError('Shot limit must be between 1 and 99.')
      return
    }

    const revealDate = new Date(revealAt)
    if (Number.isNaN(revealDate.getTime())) {
      setError('Please choose a valid reveal time.')
      return
    }
    if (revealDate.getTime() <= Date.now()) {
      setError('Reveal time must be in the future.')
      return
    }

    setSubmitting(true)
    const result = await createEvent({
      host_name: trimmedHost,
      event_name: trimmedEvent,
      shot_limit: shotLimit,
      reveal_at: revealDate.toISOString(),
    })
    setSubmitting(false)

    if ('error' in result) {
      setError(result.error)
      return
    }

    router.push(`/host/${result.event.id}`)
  }

  return (
    <main className="min-h-dvh px-6 py-10 fade-in">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
        style={{ color: '#888' }}
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
        Create an event
      </h1>
      <p className="text-sm mb-10 leading-relaxed" style={{ color: '#888' }}>
        Set the basics. You&apos;ll get a QR code and link for guests right after.
      </p>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-6">
        <Field label="Your name">
          <input
            type="text"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
            placeholder="Alex"
            required
            maxLength={120}
            className={inputClass}
            style={inputStyle}
          />
        </Field>

        <Field label="Event name">
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Sarah & James — Wedding"
            required
            maxLength={200}
            className={inputClass}
            style={inputStyle}
          />
        </Field>

        <Field label="Shots per guest">
          <input
            type="number"
            value={shotLimit}
            onChange={(e) => setShotLimit(Number(e.target.value))}
            min={1}
            max={99}
            required
            className={inputClass}
            style={inputStyle}
          />
        </Field>

        <Field label="Reveal photos at">
          <input
            type="datetime-local"
            value={revealAt}
            onChange={(e) => setRevealAt(e.target.value)}
            required
            className={inputClass}
            style={inputStyle}
          />
        </Field>

        {error && (
          <p className="text-sm" style={{ color: '#e88' }} role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          style={{ background: 'var(--accent)', color: '#0d0d0d' }}
        >
          {submitting ? 'Creating…' : 'Create event'}
        </button>
      </form>
    </main>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
        {label}
      </span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-xl text-base outline-none transition-colors focus:ring-1 focus:ring-[var(--accent)]'

const inputStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  color: 'var(--foreground)',
} as const
