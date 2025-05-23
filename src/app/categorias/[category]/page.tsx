'use client'

import { notFound, useParams } from 'next/navigation'

import { ecommerce } from '@/data/ecommerce'
import { ReturnLink } from '@/components/shared'
import { ProductCard } from '@/components/product'

export default function CategoryDetailPage() {
  const params = useParams<{ category: string }>()

  const category = ecommerce.categories.find((c) => c.slug === params.category)
  if (!category) return notFound()

  const products = ecommerce.products.filter((p) => p.categoryId === category.id)

  return (
    <div className="space-y-6">
      <ReturnLink path="/categorias" text="Ver todas as categorias" />

      <h1 className="text-2xl font-bold text-zinc-800">{category.name}</h1>

      {products.length === 0 ? (
        <p className="text-zinc-600">Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} categorySlug={category.slug} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
