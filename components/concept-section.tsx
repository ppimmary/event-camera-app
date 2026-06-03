type ConceptSectionProps = {
  title: string
  children: React.ReactNode
}

export function ConceptSection({ title, children }: ConceptSectionProps) {
  return (
    <section style={{ marginTop: 40 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#888',
          marginBottom: 14,
        }}
      >
        {title}
      </p>
      {children}
    </section>
  )
}
