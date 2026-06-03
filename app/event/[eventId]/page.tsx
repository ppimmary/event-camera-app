import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/events'
import { formatRevealAt } from '@/lib/format'

type PageProps = {
  params: Promise<{ eventId: string }>
}

export default async function EventJoinPage({ params }: PageProps) {
  const { eventId } = await params
  const event = await getEventById(eventId)
  if (!event) notFound()

  return (
    <main className="min-h-dvh px-6 py-20 flex flex-col items-center text-center fade-in">
      <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#666' }}>
        You&apos;re invited
      </p>
      <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
        {event.event_name}
      </h1>
      <p className="text-base mb-8" style={{ color: '#888' }}>
        {event.shot_limit} shots per person · reveal {formatRevealAt(event.reveal_at)}
      </p>
      <p
        className="text-sm max-w-xs leading-relaxed rounded-xl px-5 py-4"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: '#888' }}
      >
        Camera and photo capture are coming next. You&apos;re on the guest list for this event.
      </p>
    </main>
  )
}
