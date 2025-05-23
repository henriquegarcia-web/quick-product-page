'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'

import { useProductSelection } from '@/hooks/useProductSelection'
import { ecommerce } from '@/data/ecommerce'
import { applyMask } from '@/utils/masks'

// ─── Componente ProductPrice ────────────────────────────────────────────────

export default function ProductPrice() {
  const params = useParams<{ slug: string }>()
  const { selectedSizeData, loading } = useProductSelection(params.slug)
  const { installment, pixDiscount } = ecommerce.store.pricing

  if (loading) {
    return <div className="h-32 bg-zinc-100 animate-pulse rounded-lg" />
  }

  // Caso não exista o produto
  if (!selectedSizeData) {
    return (
      <div className="space-y-1 text-zinc-800" aria-label="Produto indisponível">
        <p className="text-red-500 font-medium">Produto indisponível</p>
      </div>
    )
  }

  // Variáveis derivadas
  const withoutStock = selectedSizeData.stock === 0
  const onSale = selectedSizeData.price.original > selectedSizeData.price.current
  const pixValue = selectedSizeData.price.current * (1 - pixDiscount)
  const installmentValue = selectedSizeData.price.current / installment.quantity

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
              De {applyMask(selectedSizeData.price.original, 'currency')}
            </p>
          )}

          {/* Preço atual */}
          <p className="text-4xl font-extrabold text-green-600">
            {applyMask(selectedSizeData.price.current, 'currency')}
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
