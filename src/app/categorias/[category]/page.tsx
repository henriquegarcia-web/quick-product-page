'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { notFound, useParams } from 'next/navigation'

import { ecommerce } from '@/data/ecommerce'
import { ReturnLink } from '@/components/shared'
import { ProductCard } from '@/components/product'

// ─── Componente CategoryDetailPage ──────────────────────────────────────────

export default function CategoryDetailPage() {
  const params = useParams<{ category: string }>()

  // Busca da categoria pelo slug
  const category = ecommerce.categories.find((c) => c.slug === params.category)
  if (!category) return notFound()

  // Produtos filtrados pela categoria
  const products = ecommerce.products.filter((p) => p.categoryId === category.id)

  return (
    <div
      className="flex flex-col gap-y-6 min-h-[var(--home-height)] py-8"
      aria-label={`Página da categoria ${category.name}`}
    >
      {/* Link de retorno */}
      <ReturnLink path="/categorias" text="Ver todas as categorias" />

      {/* Nome da categoria */}
      <h1 className="text-2xl font-bold text-zinc-800">{category.name}</h1>

      {/* Lista de produtos */}
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
