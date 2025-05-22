'use client'

interface Props {
  sizes: string[]
  colors: string[]
  selectedSize?: string
  selectedColor?: string
  onSelectSize?: (size: string) => void
  onSelectColor?: (color: string) => void
}

export default function VariantSelector({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSelectSize,
  onSelectColor,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium">Tamanho</h3>
        <div className="flex gap-2 mt-1">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSelectSize?.(size)}
              className={`px-3 py-1 border rounded ${selectedSize === size ? 'bg-zinc-800 text-white' : ''}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium">Cor</h3>
        <div className="flex gap-2 mt-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onSelectColor?.(color)}
              className={`px-3 py-1 border rounded ${selectedColor === color ? 'bg-zinc-800 text-white' : ''}`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
