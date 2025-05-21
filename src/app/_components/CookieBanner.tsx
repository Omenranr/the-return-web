'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(localStorage.getItem('cookiesAccepted') !== '1'), [])
  if (!open) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[min(100%,32rem)]">
      <div className="relative rounded-lg bg-white text-gray-800 px-6 py-4 shadow-lg">
        <p className="text-sm">
          En naviguant sur notre site internet, vous acceptez notre{' '}
          <Link href="#" className="font-medium underline">
            politique de confidentialité &amp; cookies
          </Link>
        </p>
        <button
          aria-label="Fermer"
          onClick={() => { localStorage.setItem('cookiesAccepted', '1'); setOpen(false) }}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
