interface BuyButtonProps {
  selectedColor: string
  selectedSize: string
  disabled?: boolean
  onBuy?: () => void
}

export default function BuyButton({
  selectedColor,
  selectedSize,
  disabled,
  onBuy,
}: BuyButtonProps) {
  const isDisabled = !selectedColor || !selectedSize || disabled

  return (
    <button
      onClick={onBuy}
      disabled={isDisabled}
      className={`w-full rounded px-6 py-3 text-sm font-medium transition
        ${
          isDisabled
            ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
            : 'bg-zinc-900 text-white hover:bg-zinc-800'
        }`}
    >
      {isDisabled ? 'Selecione cor e tamanho' : 'Adicionar ao carrinho'}
    </button>
  )
}
