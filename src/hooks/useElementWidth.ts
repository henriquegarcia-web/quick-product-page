'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useEffect, useState, RefObject } from 'react'

// ─── Hook useElementWidth ───────────────────────────────────────────────────

/**
 * Retorna dinamicamente a largura do primeiro filho <div> dentro de um elemento referenciado.
 * Observa mudanças de tamanho usando ResizeObserver.
 * Utilizado para ajustar o tamanho de elementos responsivos.
 */
export function useElementWidth<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const updateWidth = () => {
      const firstChild = ref.current?.querySelector('div')
      if (firstChild instanceof HTMLElement) {
        setWidth(firstChild.offsetWidth)
      }
    }

    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return width
}
