import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/events'
import { formatRevealAt } from '@/lib/format'
import { BRAND } from '@/lib/brand'

type PageProps = {
  params: Promise<{ eventId: string }>
}

export default async function EventJoinPage({ params }: PageProps) {
  const { eventId } = await params
  const event = await getEventById(eventId)
  if (!event) notFound()

  return (
    <main className="min-h-dvh py-16 px-5 flex flex-col items-center fade-in">
      <div className="page-wrap w-full">
        <div
          className="rounded-2xl p-6 sm:p-8 text-center"
          style={{ background: 'var(--yellow)', border: '3px solid var(--ink)' }}
        >
          <p className="text-xs font-extrabold uppercase tracking-widest">You&apos;re on the list</p>
          <h1 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">{event.event_name}</h1>
          <p className="font-bold mt-4">
            {event.shot_limit} frames · album drops {formatRevealAt(event.reveal_at)}
          </p>

          <div
            className="mt-8 py-8 px-4 rounded-xl font-bold text-sm sm:text-base"
            style={{ background: 'var(--background)', border: '2px dashed var(--ink)' }}
          >
            Booth opens soon — don&apos;t leave
          </div>

          <p className="text-sm muted mt-6 leading-relaxed">
            {BRAND.name} camera is coming. You&apos;re checked in — bookmark this page to shoot
            when capture goes live.
          </p>
        </div>
      </div>
    </main>
  )
}
