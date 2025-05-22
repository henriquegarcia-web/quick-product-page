'use client'

import { ecommerce } from '@/data/ecommerce'
import type { IProductPrice } from '@/types/ecommerce'
import { applyMask } from '@/utils/masks'

interface Props {
  price?: IProductPrice
  stock: number
}

export default function ProductPrice({ price, stock }: Props) {
  const { installment, pixDiscount } = ecommerce.store.pricing

  if (!price) {
    return (
      <div className="space-y-1 text-zinc-800">
        <p className="text-red-500 font-medium">Produto indisponível</p>
      </div>
    )
  }

  const withoutStock = stock === 0
  const onSale = price.original !== undefined && price.original > price.current

  const pixValue = price.current * (1 - pixDiscount)
  const installmentValue = price.current / installment.quantity

  return (
    <div className="space-y-1 text-zinc-800">
      {withoutStock ? (
        <p className="text-red-500 font-medium">Produto esgotado</p>
      ) : (
        <>
          {onSale && (
            <p className="text-sm text-zinc-500 line-through">
              De {applyMask(price.original ?? 0, 'currency')}
            </p>
          )}

          <p className="text-xl font-semibold text-green-600">
            {applyMask(price.current, 'currency')}
          </p>

          <p className="text-sm text-zinc-600">
            ou{' '}
            <span className="text-green-700 font-medium">
              {applyMask(pixValue, 'currency')}
            </span>{' '}
            à vista no Pix
          </p>

          <p className="text-sm text-zinc-600">
            ou{' '}
            <span className="font-medium">
              {installment.quantity}x de {applyMask(installmentValue, 'currency')}
            </span>{' '}
            sem juros
          </p>
        </>
      )}
    </div>
  )
}
