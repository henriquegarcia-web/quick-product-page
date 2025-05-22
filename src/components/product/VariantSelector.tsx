'use client'

interface Props {
  colors: string[]
  sizes: string[]
  selectedColor: string
  selectedSize: string
  onSelectColor: (color: string) => void
  onSelectSize: (size: string) => void
}

export default function VariantSelector({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onSelectColor,
  onSelectSize,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Cores */}
      <div>
        <h3 className="text-sm font-medium text-zinc-700 mb-1">Cor</h3>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onSelectColor(color)}
              className={`px-4 py-1 border rounded text-sm capitalize transition ${
                selectedColor === color
                  ? 'bg-zinc-800 text-white border-zinc-800'
                  : 'bg-white text-zinc-800 border-zinc-300'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Tamanhos */}
      <div>
        <h3 className="text-sm font-medium text-zinc-700 mb-1">Tamanho</h3>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSelectSize(size)}
              className={`px-4 py-1 border rounded text-sm uppercase transition ${
                selectedSize === size
                  ? 'bg-zinc-800 text-white border-zinc-800'
                  : 'bg-white text-zinc-800 border-zinc-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
