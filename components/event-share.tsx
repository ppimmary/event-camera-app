'use client'

import { useCallback, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Check, Copy } from 'lucide-react'

type EventShareProps = {
  shareUrl: string
  eventName: string
}

export function EventShare({ shareUrl, eventName }: EventShareProps) {
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
    <div className="w-full flex flex-col gap-4">
      <div className="card p-5 flex flex-col items-center text-center">
        <p className="band-green mb-4">Scan to get in</p>
        <div className="p-3 rounded-xl bg-white" style={{ border: '2px solid var(--ink)' }}>
          <QRCodeSVG
            value={shareUrl}
            size={180}
            level="M"
            marginSize={2}
            fgColor="#1a1a1a"
            bgColor="#ffffff"
          />
        </div>
        <p className="font-black text-lg mt-4">{eventName}</p>
      </div>

      <div className="card p-4">
        <p className="band-green mb-3">Or share the link</p>
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm break-all"
          style={{ border: '2px solid var(--ink)' }}
        >
          <span className="flex-1 font-medium">{shareUrl}</span>
          <button
            type="button"
            onClick={copyLink}
            className="btn-ink flex-shrink-0 px-3 py-2 text-xs sm:text-sm gap-1"
            aria-label={copied ? 'Copied' : 'Copy link'}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  )
}
