'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { ProductCard } from '@/components/product'
import { useCategoryDetail } from '@/hooks/useCategoryDetail'

// ─── Componente CategoryProductsList ────────────────────────────────────────

export default function CategoryProductsList() {
  const { category, products, loading } = useCategoryDetail()

  if (loading) return <CategoryProductsListSkeleton />

  if (!category) return null

  if (products.length === 0) {
    return <p className="text-zinc-600">Nenhum produto encontrado nesta categoria.</p>
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} categorySlug={category.slug} />
        </li>
      ))}
    </ul>
  )
}

// ─── CategoryProductsList Skeleton ──────────────────────────────────────────

function CategoryProductsListSkeleton() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <div className="w-full h-72 bg-zinc-100 animate-pulse rounded-lg" />
        </li>
      ))}
    </ul>
  )
}
