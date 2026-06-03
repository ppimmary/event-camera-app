/** Guest join URL path (used for QR codes and share links). */
export function eventJoinPath(eventId: string) {
  return `/event/${eventId}`
}

export function hostPath(eventId: string) {
  return `/host/${eventId}`
}

export function absoluteUrl(baseUrl: string, path: string) {
  const base = baseUrl.replace(/\/$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
