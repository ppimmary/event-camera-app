import Link from 'next/link'
import { ConceptSection } from '@/components/concept-section'

const green = '#3D9A50'
const yellow = '#FFD93D'
const ink = '#1A1A1A'
const cream = '#FFFBF5'
const font = 'system-ui, -apple-system, sans-serif'

export default function RollcallConceptPage() {
  return (
    <main style={{ background: cream, color: ink, minHeight: '100dvh', fontFamily: font }}>
      <div style={{ maxWidth: 440, margin: '0 auto', padding: '1.25rem 1.25rem 3rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/concepts" style={{ fontSize: 14, fontWeight: 600, color: green, textDecoration: 'none' }}>
            ← Concepts
          </Link>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: green }}>
            A · GRAZA
          </span>
        </header>

        <h1 style={{ fontSize: 48, lineHeight: 0.95, marginTop: 20, fontWeight: 900 }}>ROLLCALL</h1>
        <p style={{ fontSize: 16, marginTop: 10 }}>Everybody in. X shots each. Album drops at [time].</p>

        <ConceptSection title="Homepage">
          <div style={{ background: yellow, padding: '10px 14px', borderRadius: 8, marginBottom: 12 }}>
            <p style={{ fontSize: 12, fontWeight: 800 }}>NOT YOUR AVERAGE EVENT CAM</p>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.1 }}>Extra photos. Zero spoilers.</h2>
          <p style={{ fontSize: 15, marginTop: 10, lineHeight: 1.5 }}>
            Guests scan a QR, shoot their frames, and the whole album unlocks when you say go.
          </p>
          <p
            style={{
              marginTop: 16,
              display: 'inline-block',
              padding: '14px 24px',
              background: green,
              color: '#fff',
              fontWeight: 800,
              borderRadius: 12,
              border: `3px solid ${ink}`,
            }}
          >
            START A ROLL →
          </p>
        </ConceptSection>

        <ConceptSection title="Create event">
          <div style={{ background: '#fff', borderRadius: 16, padding: 16, border: `3px solid ${ink}` }}>
            <p style={{ fontSize: 12, fontWeight: 800, color: green }}>NAME THE NIGHT</p>
            <p style={{ marginTop: 12, fontWeight: 600 }}>Sam · House Warmup · 12 shots · Tonight 2 AM</p>
          </div>
        </ConceptSection>

        <ConceptSection title="Host dashboard">
          <div style={{ background: green, color: '#fff', borderRadius: 16, padding: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 800 }}>YOUR DROP KIT</p>
            <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 6 }}>House Warmup</h3>
          </div>
          <div
            style={{
              marginTop: 12,
              height: 160,
              background: '#fff',
              border: `3px solid ${ink}`,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: green,
            }}
          >
            QR CODE
          </div>
        </ConceptSection>

        <ConceptSection title="Guest event page">
          <div style={{ background: yellow, borderRadius: 16, padding: 20, border: `3px solid ${ink}` }}>
            <p style={{ fontSize: 11, fontWeight: 800 }}>YOU&apos;RE ON THE LIST</p>
            <h3 style={{ fontSize: 28, fontWeight: 900, marginTop: 8 }}>House Warmup</h3>
            <p style={{ marginTop: 8, fontWeight: 600 }}>Booth opens soon</p>
          </div>
        </ConceptSection>

        <p style={{ marginTop: 40, textAlign: 'center' }}>
          <Link href="/concepts/shipframe" style={{ fontWeight: 800, color: green }}>
            Next: SHIPFRAME →
          </Link>
        </p>
      </div>
    </main>
  )
}
