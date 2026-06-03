import Link from 'next/link'
import { ConceptSection } from '@/components/concept-section'

const black = '#000000'
const white = '#FFFFFF'
const accent = '#00FF85'
const font = 'system-ui, -apple-system, sans-serif'

export default function ShipframeConceptPage() {
  return (
    <main style={{ background: black, color: white, minHeight: '100dvh', fontFamily: font }}>
      <div style={{ maxWidth: 440, margin: '0 auto', padding: '1.25rem 1.25rem 3rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/concepts" style={{ fontSize: 13, fontWeight: 600, color: accent, textDecoration: 'none' }}>
            ← Concepts
          </Link>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#666' }}>B · SHIP</span>
        </header>

        <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 0.9, marginTop: 32, letterSpacing: '-0.04em' }}>
          Scan.
          <br />
          Shoot.
          <br />
          <span style={{ color: accent }}>Reveal.</span>
        </h1>

        <ConceptSection title="Homepage">
          <p style={{ fontSize: 14, color: '#888' }}>EVENT · HOUSE WARMUP · REVEAL 02:00</p>
          <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 16, color: '#ccc' }}>
            Browser photobooth. Limited frames per guest. One album unlock for the whole room.
          </p>
          <p
            style={{
              marginTop: 20,
              display: 'inline-block',
              padding: '16px 24px',
              background: white,
              color: black,
              fontWeight: 800,
            }}
          >
            Create event
          </p>
        </ConceptSection>

        <ConceptSection title="Create event">
          <div style={{ border: '1px solid #333', padding: 20 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', color: '#666' }}>NEW EVENT</p>
            <p style={{ marginTop: 12, fontSize: 18, fontWeight: 700 }}>SAM · HOUSE WARMUP · 12 · 02:00</p>
          </div>
        </ConceptSection>

        <ConceptSection title="Host dashboard">
          <h3 style={{ fontSize: 26, fontWeight: 800 }}>House Warmup</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
            <div style={{ border: '1px solid #333', padding: 12 }}>
              <p style={{ fontSize: 10, color: '#666' }}>SHOTS</p>
              <p style={{ fontSize: 28, fontWeight: 800 }}>12</p>
            </div>
            <div style={{ border: '1px solid #333', padding: 12 }}>
              <p style={{ fontSize: 10, color: '#666' }}>REVEAL IN</p>
              <p style={{ fontSize: 28, fontWeight: 800, color: accent }}>4:02</p>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              height: 140,
              background: white,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: black,
              fontWeight: 800,
            }}
          >
            QR
          </div>
        </ConceptSection>

        <ConceptSection title="Guest event page">
          <div style={{ borderTop: `1px solid ${accent}`, borderBottom: `1px solid ${accent}`, padding: '24px 0' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', color: accent }}>CHECKED IN</p>
            <h3 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>House Warmup</h3>
            <p style={{ marginTop: 8, color: '#888' }}>Camera coming soon</p>
          </div>
        </ConceptSection>

        <p style={{ marginTop: 40, textAlign: 'center' }}>
          <Link href="/concepts/peek" style={{ fontWeight: 700, color: accent }}>
            Next: PEEK →
          </Link>
        </p>
      </div>
    </main>
  )
}
