'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { VariantButton } from '@/components/product'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface VariantSelectorProps {
  colors: string[]
  sizes: string[]
  selectedColor: string
  selectedSize: string
  onSelectColor: (color: string) => void
  onSelectSize: (size: string) => void
  availableSizes: string[]
}

// ─── Componente VariantSelector ─────────────────────────────────────────────

export default function VariantSelector({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onSelectColor,
  onSelectSize,
  availableSizes,
}: VariantSelectorProps) {
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
              onClick={() => onSelectColor(color)}
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
              onClick={() => onSelectSize(size)}
              disabled={!availableSizes.includes(size)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
