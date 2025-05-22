'use client'

import { useState, useRef, useEffect } from 'react'

interface ExpandableTextProps {
  children: string
  className?: string
}

export default function ExpandableText({ className = '', children }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

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
      <div ref={contentRef} className={`transition-all ${expanded ? '' : 'line-clamp-2'}`}>
        {children}
      </div>

      {isTruncated && (
        <a
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[var(--link)] opacity-65 hover:opacity-100 font-semibold"
        >
          {expanded ? 'Ver menos' : 'Ver mais'}
        </a>
      )}
    </div>
  )
}
