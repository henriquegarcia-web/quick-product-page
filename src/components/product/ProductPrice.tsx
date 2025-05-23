'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { ecommerce } from '@/data/ecommerce'
import { applyMask } from '@/utils/masks'

import type { IProductPrice } from '@/types/product'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface ProductPriceProps {
  price?: IProductPrice
  stock: number
}

// ─── Componente ProductPrice ────────────────────────────────────────────────

export default function ProductPrice({ price, stock }: ProductPriceProps) {
  const { installment, pixDiscount } = ecommerce.store.pricing

  // Caso não exista preço definido
  if (!price) {
    return (
      <div className="space-y-1 text-zinc-800" aria-label="Produto indisponível">
        <p className="text-red-500 font-medium">Produto indisponível</p>
      </div>
    )
  }

  // Variáveis derivadas
  const withoutStock = stock === 0
  const onSale = price.original !== undefined && price.original > price.current
  const pixValue = price.current * (1 - pixDiscount)
  const installmentValue = price.current / installment.quantity

  return (
    <div className="space-y-1 text-zinc-800" aria-label="Informações de preço do produto">
      {/* Produto esgotado */}
      {withoutStock ? (
        <p className="text-red-500 font-semibold">Produto esgotado</p>
      ) : (
        <>
          {/* Preço original riscado */}
          {onSale && (
            <p className="text-xl text-zinc-500 line-through">
              De {applyMask(price.original ?? 0, 'currency')}
            </p>
          )}

          {/* Preço atual */}
          <p className="text-4xl font-extrabold text-green-600">
            {applyMask(price.current, 'currency')}
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-xl text-zinc-500">
            ou{' '}
            <span className="text-green-600 font-extrabold">{applyMask(pixValue, 'currency')}</span>{' '}
            à vista no Pix
          </p>

          {/* Parcelamento */}
          <p className="text-md text-zinc-500">
            ou{' '}
            <span className="font-semibold">
              {installment.quantity}x de {applyMask(installmentValue, 'currency')}
            </span>{' '}
            sem juros
          </p>
        </>
      )}
    </div>
  )
}
