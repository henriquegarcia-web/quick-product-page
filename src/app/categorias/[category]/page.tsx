import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ecommerce } from '@/data/ecommerce'
import { ReturnLink } from '@/components/shared'

interface Props {
  params: {
    category: string
  }
}

export default function CategoryDetailPage({ params }: Props) {
  const category = ecommerce.categories.find((c) => c.slug === params.category)
  if (!category) return notFound()

  const products = ecommerce.products.filter((p) => p.categoryId === category.id)

  return (
    <div className="space-y-6">
      <ReturnLink path="/categorias" text="Ver todas categorias" />

      <h1 className="text-2xl font-bold text-zinc-800">{category.name}</h1>

      {products.length === 0 ? (
        <p className="text-zinc-600">Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                href={`/categorias/${category.slug}/${product.slug}`}
                className="block border border-zinc-200 rounded-lg hover:shadow transition overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.variants[0].images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-zinc-900">{product.name}</h2>
                  <p className="text-sm text-zinc-600 line-clamp-2">{product.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
