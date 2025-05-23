'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'

import { useProductDetail } from '@/hooks/useProductDetail'
import { ExpandableText } from '@/components/product'

// ─── Componente ProductInfo ─────────────────────────────────────────────────

export default function ProductInfo() {
  const params = useParams<{ slug: string }>()
  const { product, loading } = useProductDetail(params.slug)

  if (loading) return <ProductInfoSkeleton />

  if (!product) return null

  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-zinc-900">{product.name}</h1>
      <ExpandableText>{product.description}</ExpandableText>
    </div>
  )
}

// ─── ProductInfo Loading Skeleton ───────────────────────────────────────────

function ProductInfoSkeleton() {
  return <div className="h-24 bg-zinc-100 animate-pulse rounded-lg" />
}
