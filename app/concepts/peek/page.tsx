import Link from 'next/link'
import { ConceptSection } from '@/components/concept-section'

const coral = '#FF6B4A'
const teal = '#4ECDC4'
const cream = '#FAFAF8'
const ink = '#1A1A1A'
const font = 'system-ui, -apple-system, sans-serif'

export default function PeekConceptPage() {
  return (
    <main style={{ background: cream, color: ink, minHeight: '100dvh', fontFamily: font }}>
      <div style={{ maxWidth: 440, margin: '0 auto', padding: '1.25rem 1.25rem 3rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/concepts" style={{ fontSize: 14, fontWeight: 600, color: coral, textDecoration: 'none' }}>
            ← Concepts
          </Link>
          <span style={{ fontSize: 11, fontWeight: 800, color: teal }}>C · MIX</span>
        </header>

        <h1 style={{ fontSize: 52, fontWeight: 900, marginTop: 16, letterSpacing: '-0.03em' }}>PEEK</h1>
        <p style={{ fontSize: 17, fontWeight: 600, color: '#666' }}>Photos now. Gallery later.</p>

        <ConceptSection title="Homepage">
          <p
            style={{
              display: 'inline-block',
              background: coral,
              color: '#fff',
              padding: '8px 14px',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            NO PEEKING UNTIL REVEAL
          </p>
          <h2 style={{ fontSize: 30, fontWeight: 900, marginTop: 16, lineHeight: 1.1 }}>
            Your event&apos;s photo drop, in the browser.
          </h2>
          <p style={{ marginTop: 12, lineHeight: 1.55, color: '#555' }}>
            QR in, limited shots, one shared album when the timer hits.
          </p>
        </ConceptSection>

        <ConceptSection title="Create event">
          <div
            style={{
              background: '#fff',
              borderRadius: 20,
              padding: 20,
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 800 }}>Name the night</h3>
            <p style={{ marginTop: 12, color: '#666' }}>Alex · Neon Rooftop · 12 frames · Sat 11:59 PM</p>
          </div>
        </ConceptSection>

        <ConceptSection title="Host dashboard">
          <div style={{ background: '#fff', borderRadius: 20, padding: 20, border: `3px solid ${ink}` }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: teal }}>HOST KIT</p>
            <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 8 }}>Neon Rooftop</h3>
            <div
              style={{
                marginTop: 16,
                height: 120,
                borderRadius: 16,
                border: `3px dashed ${coral}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: coral,
              }}
            >
              GUEST SCAN →
            </div>
          </div>
        </ConceptSection>

        <ConceptSection title="Guest event page">
          <div
            style={{
              textAlign: 'center',
              padding: 24,
              background: '#fff',
              borderRadius: 24,
              border: `2px solid ${teal}`,
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 800, color: teal }}>YOU&apos;RE IN</p>
            <h3 style={{ fontSize: 28, fontWeight: 900, marginTop: 8 }}>Neon Rooftop</h3>
            <p style={{ marginTop: 12, fontWeight: 600 }}>Camera opens soon</p>
          </div>
        </ConceptSection>

        <p style={{ marginTop: 40, textAlign: 'center' }}>
          <Link href="/concepts" style={{ fontWeight: 800, color: coral }}>
            ← Compare all three
          </Link>
        </p>
      </div>
    </main>
  )
}
