import Link from 'next/link'

const concepts = [
  {
    slug: 'rollcall',
    name: 'ROLLCALL',
    tagline: 'Everybody in. X shots each. Album drops at [time].',
    mood: 'Graza-style · editorial bands, product cards, loud DTC',
    bg: '#FFFBF5',
    accent: '#3D9A50',
    secondary: '#FFD93D',
    text: '#1A1A1A',
  },
  {
    slug: 'shipframe',
    name: 'SHIPFRAME',
    tagline: 'Scan. Shoot. Reveal.',
    mood: 'Ship-style · poster type, brutal contrast, one big CTA',
    bg: '#000000',
    accent: '#00FF85',
    secondary: '#FFFFFF',
    text: '#FFFFFF',
  },
  {
    slug: 'peek',
    name: 'PEEK',
    tagline: 'Photos now. Gallery later.',
    mood: 'Graza × Ship · callout strips, playful, polished drop',
    bg: '#FAFAF8',
    accent: '#FF6B4A',
    secondary: '#4ECDC4',
    text: '#1A1A1A',
  },
] as const

export default function ConceptsHubPage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        background: '#FAFAF8',
        color: '#1A1A1A',
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem 1.25rem 3rem',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link href="/" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>
          ← Back to current app
        </Link>
        <p
          style={{
            marginTop: 24,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: '#FF6B4A',
          }}
        >
          Graza × Ship inspired · previews only
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.25rem, 7vw, 3rem)',
            fontWeight: 900,
            marginTop: 8,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Pick a vibe
        </h1>
        <p style={{ color: '#666', marginTop: 10, lineHeight: 1.6, maxWidth: 520 }}>
          Each demo scrolls through homepage, create, host kit, and guest page. Your real
          routes still work as-is — this is visual only.
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            marginTop: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {concepts.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/concepts/${c.slug}`}
                style={{
                  display: 'block',
                  padding: '1.35rem 1.5rem',
                  borderRadius: 20,
                  background: c.bg,
                  border: `3px solid ${c.accent}`,
                  textDecoration: 'none',
                  color: c.text,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: c.accent,
                  }}
                >
                  CONCEPT {String.fromCharCode(65 + i)}
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: 6, letterSpacing: '-0.02em' }}>
                  {c.name}
                </h2>
                <p style={{ marginTop: 8, fontSize: 15, fontWeight: 500 }}>{c.tagline}</p>
                <p style={{ marginTop: 8, fontSize: 13, opacity: 0.7 }}>{c.mood}</p>
                <p style={{ marginTop: 14, fontSize: 14, fontWeight: 800, color: c.accent }}>
                  OPEN DEMO →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
