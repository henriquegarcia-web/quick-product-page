import Link from 'next/link'

import { ecommerce } from '@/data/ecommerce'
import { ReturnLink } from '@/components/shared'

export default function CategoriesListPage() {
  const categories = ecommerce.categories

  return (
    <div className="space-y-6">
      <ReturnLink path="/" text="Voltar para o início" />

      <h1 className="text-2xl font-bold text-zinc-800">Categorias</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categorias/${category.slug}`}
              className="block p-4 border border-zinc-200 rounded-lg hover:shadow transition"
            >
              <h2 className="text-lg font-semibold text-zinc-900">{category.name}</h2>
              <p className="text-sm text-zinc-600">Ver produtos da categoria</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
