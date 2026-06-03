import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design concepts — preview',
  description: 'Visual demos for ROLLCALL, SHIPFRAME, and PEEK',
}

export default function ConceptsLayout({ children }: { children: React.ReactNode }) {
  return children
}
