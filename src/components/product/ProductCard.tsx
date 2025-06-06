'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

import { useElementWidth } from '@/hooks/useElementWidth'
import { Button } from '@/components/forms'

import type { IProduct } from '@/types/product'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface IProductCardProps {
  product: IProduct
  categorySlug: string
}

// ─── Componente ProductCard ─────────────────────────────────────────────────

export default function ProductCard({ product, categorySlug }: IProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const imageWidth = useElementWidth(sliderRef)
  const productImages = product.variants[0].images

  // Animação automática no hover
  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productImages.length)
      }, 1500)
    } else {
      clearInterval(intervalRef.current!)
      setCurrentIndex(0)
    }

    return () => clearInterval(intervalRef.current!)
  }, [hovered, productImages])

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-4 p-4 border border-zinc-200 rounded-lg hover:shadow-md transition"
      aria-label={`Produto: ${product.name}`}
    >
      {/* Carrossel de Imagens */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-zinc-100">
        <div
          ref={sliderRef}
          className="absolute top-0 left-0 flex h-full"
          style={{
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: 'transform 0.6s ease-in-out',
          }}
        >
          {productImages.map((img, i) => (
            <div key={i} className="relative w-full aspect-square">
              <Image
                src={img}
                alt={`${product.name} - Imagem ${i + 1}`}
                width={280}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo do Produto */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-zinc-900 leading-snug">{product.name}</h2>
        <p className="text-sm text-zinc-600 line-clamp-2">{product.description}</p>
      </div>

      {/* Preço (Exibir preço futuramente) */}

      {/* Botão de Ação */}
      <Button className="w-full mt-2" aria-label={`Ver detalhes de ${product.name}`}>
        <Link href={`/categorias/${categorySlug}/${product.slug}`}>Ver produto</Link>
      </Button>
    </div>
  )
}
