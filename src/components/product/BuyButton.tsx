/**
 * Observações:
 * - Considerando o escopo reduzido do projeto, não implementei a lógica de
 *   compra e adição ao carrinho, mas sim uma simulação de delay para demonstrar
 *   o carregamento do botão.
 * - Optei por separar esse componente de botão de compra/adição ao carrinho do
 *   botão principal, localizado em "components/forms"
 */

'use client'

import { useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import type { IProduct } from '@/types/ecommerce'

interface BuyButtonProps {
  selectedColor: string
  selectedSize: string
  disabled?: boolean
  loading?: boolean
  product: IProduct
  mode: 'buy' | 'cart'
}

export default function BuyButton({
  selectedColor,
  selectedSize,
  disabled,
  loading: externalLoading = false,
  product,
  mode,
}: BuyButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false)

  const isDisabled =
    !selectedColor || !selectedSize || disabled || externalLoading || internalLoading

  const onClick = () => {
    const action = mode === 'buy' ? 'Compra imediata' : 'Adicionado ao carrinho'

    setInternalLoading(true)
    setTimeout(() => {
      setInternalLoading(false)
      console.log(`${action}:`, {
        slug: product.slug,
        color: selectedColor,
        size: selectedSize,
      })
    }, 2000)
  }

  const baseClass =
    mode === 'cart'
      ? 'text-green-700 bg-green-200 opacity-85 hover:opacity-100'
      : 'text-white bg-green-600 opacity-85 hover:opacity-100'

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full h-[var(--input-height)] px-6 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition
        ${isDisabled ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed' : baseClass}`}
    >
      {(externalLoading || internalLoading) && (
        <ImSpinner9 className="w-4 h-4 animate-spin text-inherit" />
      )}
      {isDisabled && !externalLoading && !internalLoading
        ? 'Selecione cor e tamanho'
        : externalLoading || internalLoading
          ? mode === 'buy'
            ? 'Finalizando...'
            : 'Adicionando...'
          : mode === 'buy'
            ? 'Comprar agora'
            : 'Adicionar ao carrinho'}
    </button>
  )
}
