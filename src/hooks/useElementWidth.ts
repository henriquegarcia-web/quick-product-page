'use client'

import { useEffect, useState, RefObject } from 'react'

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
