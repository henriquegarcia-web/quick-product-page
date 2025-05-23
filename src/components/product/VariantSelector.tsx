'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'

import { useProductDetail } from '@/hooks/useProductDetail'
import { VariantButton } from '@/components/product'

// ─── Componente VariantSelector ─────────────────────────────────────────────

export default function VariantSelector() {
  const params = useParams<{ slug: string }>()
  const {
    colors,
    sizes,
    selectedColor,
    selectedSize,
    setSelectedColor,
    setSelectedSize,
    availableSizes,
    loading,
  } = useProductDetail(params.slug)

  if (loading) return <VariantSelectorSkeleton />

  return (
    <div className="space-y-4">
      {/* Seleção de cor */}
      <div aria-label="Seleção de cor">
        <h3 className="text-sm font-semibold text-zinc-800 mb-2">Cor</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <VariantButton
              key={color}
              label={color}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      {/* Seleção de tamanho */}
      <div aria-label="Seleção de tamanho">
        <h3 className="text-sm font-semibold text-zinc-800 mb-2">Tamanho</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <VariantButton
              key={size}
              label={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
              disabled={!availableSizes.includes(size)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── VariantSelector Loading Skeleton ───────────────────────────────────────

function VariantSelectorSkeleton() {
  return <div className="h-28 bg-zinc-100 animate-pulse rounded-lg" />
}
