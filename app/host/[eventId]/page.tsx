import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EventShare } from '@/components/event-share'
import { getEventById } from '@/lib/events'
import { formatRevealAt } from '@/lib/format'
import { getSiteOrigin } from '@/lib/site-url'
import { absoluteUrl, eventJoinPath } from '@/lib/urls'
import { BRAND } from '@/lib/brand'

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
    <main className="min-h-dvh py-10 pb-16 fade-in">
      <div className="page-wrap flex flex-col gap-6">
        <div className="card-invert p-5">
          <p className="text-xs font-extrabold uppercase tracking-widest opacity-90">Your drop kit</p>
          <h1 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">{event.event_name}</h1>
          <p className="text-sm mt-2 font-semibold opacity-90">Hosted by {event.host_name}</p>
        </div>

        <dl className="card grid grid-cols-2 gap-4 p-4 text-sm">
          <div>
            <dt className="band-green">Shots / guest</dt>
            <dd className="text-3xl font-black mt-1">{event.shot_limit}</dd>
          </div>
          <div>
            <dt className="band-green">Album drops</dt>
            <dd className="font-bold mt-1 leading-snug">{formatRevealAt(event.reveal_at)}</dd>
          </div>
        </dl>

        <EventShare shareUrl={shareUrl} eventName={event.event_name} />

        <div className="card p-4">
          <p className="band-green mb-3">For you, the host</p>
          <ol className="text-sm muted list-decimal list-inside space-y-2 font-medium">
            <li>Display the QR where guests gather.</li>
            <li>Text the link to anyone who can&apos;t scan.</li>
            <li>Photos stay sealed until album drop time.</li>
          </ol>
        </div>

        <p className="text-xs text-center muted">{BRAND.name} · no app for guests</p>

        <Link href="/" className="text-sm text-center font-bold hover:opacity-70" style={{ color: 'var(--green)' }}>
          Back to home
        </Link>
      </div>
    </main>
  )
}
