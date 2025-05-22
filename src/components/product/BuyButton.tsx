import { ImSpinner9 } from 'react-icons/im'

interface BuyButtonProps {
  selectedColor: string
  selectedSize: string
  disabled?: boolean
  loading?: boolean
  onBuy?: () => void
}

export default function BuyButton({
  selectedColor,
  selectedSize,
  disabled,
  loading = false,
  onBuy,
}: BuyButtonProps) {
  const isDisabled = !selectedColor || !selectedSize || disabled || loading

  return (
    <button
      onClick={onBuy}
      disabled={isDisabled}
      className={`w-full rounded px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 transition
        ${
          isDisabled
            ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
            : 'bg-zinc-900 text-white hover:bg-zinc-800'
        }`}
    >
      {loading && <ImSpinner9 className="w-4 h-4 animate-spin text-inherit" />}

      {isDisabled && !loading
        ? 'Selecione cor e tamanho'
        : loading
          ? 'Adicionando...'
          : 'Adicionar ao carrinho'}
    </button>
  )
}
