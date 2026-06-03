'use client'

import { useCallback, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Check, Copy } from 'lucide-react'

type EventShareProps = {
  shareUrl: string
}

export function EventShare({ shareUrl }: EventShareProps) {
  const [copied, setCopied] = useState(false)

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [shareUrl])

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-sm">
      <div
        className="p-4 rounded-2xl"
        style={{ background: '#fff', border: '1px solid var(--border)' }}
      >
        <QRCodeSVG
          value={shareUrl}
          size={200}
          level="M"
          marginSize={2}
          fgColor="#0d0d0d"
          bgColor="#ffffff"
        />
      </div>

      <div className="w-full">
        <p className="text-xs uppercase tracking-widest mb-2 text-center" style={{ color: '#666' }}>
          Share link
        </p>
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm break-all"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <span className="flex-1" style={{ color: 'var(--foreground)' }}>
            {shareUrl}
          </span>
          <button
            type="button"
            onClick={copyLink}
            className="flex-shrink-0 p-2 rounded-lg transition-colors hover:opacity-80"
            style={{ background: 'var(--border)', color: 'var(--accent)' }}
            aria-label={copied ? 'Copied' : 'Copy link'}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
    </div>
  )
}
