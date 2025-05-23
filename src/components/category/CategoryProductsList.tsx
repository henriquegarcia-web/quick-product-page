'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'

import { ecommerce } from '@/data/ecommerce'
import { ProductCard } from '@/components/product'

// ─── Componente CategoryProductsList ────────────────────────────────────────

export default function CategoryProductsList() {
  const params = useParams<{ category: string }>()
  const category = ecommerce.categories.find((c) => c.slug === params.category)

  if (!category) return null

  const products = ecommerce.products.filter((p) => p.categoryId === category.id)

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
