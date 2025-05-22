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
    <div className="space-y-4">
      {/* Cor */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-800 mb-2">Cor</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onSelectColor(color)}
              className={`px-4 py-2 rounded-md border text-sm capitalize transition
                ${
                  selectedColor === color
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500'
                }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Tamanho */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-800 mb-2">Tamanho</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSelectSize(size)}
              className={`px-4 py-2 rounded-md border text-sm uppercase transition
                ${
                  selectedSize === size
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500'
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
