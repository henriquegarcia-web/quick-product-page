/**
 * Observações:
 * - Considerando o escopo reduzido do projeto, não implementei a lógica de
 *   compra e adição ao carrinho, mas sim uma simulação de delay para demonstrar
 *   o carregamento do botão.
 * - Optei por separar esse componente de botão de compra/adição ao carrinho do
 *   botão principal, localizado em "components/forms".
 */

'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'

import { cn } from '@/utils/cn'

import type { IProduct } from '@/types/product'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface IBuyButtonProps {
  selectedColor: string
  selectedSize: string
  disabled?: boolean
  loading?: boolean
  product: IProduct
  mode: 'buy' | 'cart'
}

// ─── Componente BuyButton ───────────────────────────────────────────────────

export default function BuyButton({
  selectedColor,
  selectedSize,
  disabled,
  loading: externalLoading = false,
  product,
  mode,
}: IBuyButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false)

  // Função que define se o botão deve estar desabilitado
  const isDisabled =
    !selectedColor || !selectedSize || disabled || externalLoading || internalLoading

  // Função que simula ação de compra ou adição ao carrinho
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

  // Classe base para o botão, dependendo do modo
  const baseClass =
    mode === 'cart'
      ? 'text-green-700 bg-green-200 opacity-85 hover:opacity-100'
      : 'text-white bg-green-600 opacity-85 hover:opacity-100'

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={mode === 'buy' ? 'Comprar produto' : 'Adicionar produto ao carrinho'}
      className={cn(
        'w-full h-[var(--input-height)] px-6 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition',
        isDisabled ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed' : baseClass,
      )}
    >
      {/* Ícone de carregamento */}
      {(externalLoading || internalLoading) && (
        <ImSpinner9 className="w-4 h-4 animate-spin text-inherit" />
      )}

      {/* Texto do botão */}
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
