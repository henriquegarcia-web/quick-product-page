'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useProductDetail } from '@/hooks/useProductDetail'
import { cn } from '@/utils/cn'

// ─── Componente ImageGallery ────────────────────────────────────────────────

export default function ImageGallery() {
  const params = useParams<{ slug: string }>()
  const { currentVariant, loading } = useProductDetail(params.slug)

  const [selected, setSelected] = useState<string | null>(null)
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  // Atualiza imagem padrão quando a variante for carregada
  useEffect(() => {
    if (currentVariant?.images?.[0]) {
      setSelected(currentVariant.images[0])
    }
  }, [currentVariant])

  // Skeleton de loading
  if (loading) return <ImageGallerySkeleton />

  // Produto inválido
  if (!currentVariant || !currentVariant.images.length || !selected) return null

  // Lógica de zoom do mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <div className="space-y-4">
      {/* Imagem principal com efeito zoom */}
      <div
        ref={containerRef}
        className="relative aspect-square w-full border border-zinc-300 rounded-lg overflow-hidden"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
        aria-label="Imagem principal com zoom"
      >
        <Image
          src={selected}
          alt="Imagem principal do produto"
          width={600}
          height={600}
          className="object-cover object-center w-full h-full"
        />
        {showZoom && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${selected})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          />
        )}
      </div>

      {/* Miniaturas */}
      <div className="flex gap-2" aria-label="Miniaturas do produto">
        {currentVariant.images.map((img) => (
          <button
            key={img}
            onClick={() => setSelected(img)}
            className={cn(
              'border border-zinc-300 rounded-lg overflow-hidden hover:border-zinc-500',
              img === selected ? 'ring-2 ring-black' : '',
            )}
            aria-label="Selecionar miniatura"
          >
            <Image
              src={img}
              alt="Miniatura do produto"
              width={80}
              height={80}
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── ImageGallery Loading Skeleton ──────────────────────────────────────────

function ImageGallerySkeleton() {
  return (
    <div className="space-y-4">
      <div className="aspect-square w-full bg-zinc-100 animate-pulse rounded-lg" />
      <div className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-20 h-20 bg-zinc-100 animate-pulse rounded-lg" />
        ))}
      </div>
    </div>
  )
}
