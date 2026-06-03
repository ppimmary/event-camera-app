import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EventShare } from '@/components/event-share'
import { getEventById } from '@/lib/events'
import { formatRevealAt } from '@/lib/format'
import { getSiteOrigin } from '@/lib/site-url'
import { absoluteUrl, eventJoinPath } from '@/lib/urls'

type PageProps = {
  params: Promise<{ eventId: string }>
}

export default async function HostEventPage({ params }: PageProps) {
  const { eventId } = await params
  const event = await getEventById(eventId)
  if (!event) notFound()

  const origin = await getSiteOrigin()
  const shareUrl = absoluteUrl(origin, eventJoinPath(eventId))

  return (
    <main className="min-h-dvh px-6 py-10 fade-in flex flex-col items-center">
      <div className="w-full max-w-sm">
        <p className="text-xs uppercase tracking-widest mb-3 text-center" style={{ color: '#666' }}>
          Host dashboard
        </p>
        <h1 className="text-3xl font-bold mb-1 text-center" style={{ color: 'var(--foreground)' }}>
          {event.event_name}
        </h1>
        <p className="text-sm text-center mb-10" style={{ color: '#888' }}>
          Hosted by {event.host_name}
        </p>

        <dl
          className="grid grid-cols-2 gap-4 mb-12 text-sm rounded-xl p-4"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div>
            <dt style={{ color: '#666' }}>Shots per guest</dt>
            <dd className="font-semibold mt-1" style={{ color: 'var(--foreground)' }}>
              {event.shot_limit}
            </dd>
          </div>
          <div>
            <dt style={{ color: '#666' }}>Reveal at</dt>
            <dd className="font-semibold mt-1" style={{ color: 'var(--foreground)' }}>
              {formatRevealAt(event.reveal_at)}
            </dd>
          </div>
        </dl>
      </div>

      <EventShare shareUrl={shareUrl} />

      <p className="text-sm text-center max-w-xs mt-10 leading-relaxed" style={{ color: '#888' }}>
        Guests scan the QR code or open the link to join. Photos stay hidden until reveal time.
      </p>

      <Link
        href="/"
        className="mt-12 text-sm transition-opacity hover:opacity-70"
        style={{ color: '#666' }}
      >
        Back to home
      </Link>
    </main>
  )
}
