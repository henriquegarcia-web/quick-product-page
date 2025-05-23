'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'
import { useProductSelection } from '@/hooks/useProductSelection'
import { ExpandableText } from '@/components/product'

// ─── Componente ProductInfo ─────────────────────────────────────────────────

export default function ProductInfo() {
  const params = useParams<{ slug: string }>()
  const { product } = useProductSelection(params.slug)

  if (!product) return null

  return (
    <div className="space-y-3">
      {/* Título do produto */}
      <h1 className="text-3xl font-bold text-zinc-900">{product.name}</h1>

      {/* Descrição com texto expansível */}
      <ExpandableText>{product.description}</ExpandableText>
    </div>
  )
}
