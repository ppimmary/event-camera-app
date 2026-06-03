'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { createEvent } from '@/lib/events'
import { BRAND } from '@/lib/brand'

const DEFAULT_SHOT_LIMIT = 12
const SHOT_PRESETS = [8, 12, 24] as const

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
    <main className="min-h-dvh py-10 pb-16 fade-in">
      <div className="page-wrap">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold muted hover:opacity-70"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <h1 className="text-3xl font-black mt-8 mb-2">Name the night</h1>
        <p className="text-sm leading-relaxed muted mb-8">
          Set up your {BRAND.name} drop. Next: your host kit with QR and share link.
        </p>

        <form onSubmit={handleSubmit} className="card p-5 sm:p-6 flex flex-col gap-5">
          <p className="band-green">Details</p>

          <Field label="Your name">
            <input
              type="text"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              placeholder="Alex"
              required
              maxLength={120}
              className="input-field"
            />
          </Field>

          <Field label="Event name">
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="House Warmup"
              required
              maxLength={200}
              className="input-field"
            />
          </Field>

          <p className="band-green mt-2">The rules</p>

          <Field label="Shots per guest">
            <div className="flex flex-wrap gap-2 mb-2">
              {SHOT_PRESETS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setShotLimit(n)}
                  className="px-4 py-2 rounded-full text-sm font-bold border-2"
                  style={{
                    borderColor: 'var(--ink)',
                    background: shotLimit === n ? 'var(--green)' : '#eee',
                    color: shotLimit === n ? '#fff' : 'var(--ink)',
                  }}
                >
                  {n} shots
                </button>
              ))}
            </div>
            <input
              type="number"
              value={shotLimit}
              onChange={(e) => setShotLimit(Number(e.target.value))}
              min={1}
              max={99}
              required
              className="input-field"
            />
          </Field>

          <Field label="Album drops at">
            <input
              type="datetime-local"
              value={revealAt}
              onChange={(e) => setRevealAt(e.target.value)}
              required
              className="input-field"
            />
          </Field>

          {error && (
            <p className="text-sm font-semibold" style={{ color: 'var(--error)' }} role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={submitting} className="btn-primary w-full mt-1">
            {submitting ? 'Building your kit…' : 'Make my drop kit →'}
          </button>
        </form>
      </div>
    </main>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="label-text">{label}</span>
      {children}
    </label>
  )
}
