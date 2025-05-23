'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface ExpandableTextProps {
  children: string
  className?: string
}

// ─── Componente ExpandableText ─────────────────────────────────────────────

export default function ExpandableText({ className = '', children }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)

  // Verifica se há overflow no texto para mostrar o link de expansão
  useEffect(() => {
    const el = contentRef.current
    if (el) {
      const hasOverflow = el.scrollHeight > el.clientHeight
      setIsTruncated(hasOverflow)
    }
  }, [children])

  return (
    <div
      className={`flex flex-col items-end gap-y-1 text-base text-zinc-600 leading-normal ${className}`}
    >
      {/* Texto (com clamp quando não expandido) */}
      <div ref={contentRef} className={`transition-all ${expanded ? '' : 'line-clamp-2'}`}>
        {children}
      </div>

      {/* Toggle de expansão */}
      {isTruncated && (
        <a
          role="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[var(--link)] opacity-65 hover:opacity-100 font-semibold cursor-pointer"
        >
          {expanded ? 'Ver menos' : 'Ver mais'}
        </a>
      )}
    </div>
  )
}
