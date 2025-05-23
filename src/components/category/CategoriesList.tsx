// ─── Imports ────────────────────────────────────────────────────────────────

import Link from 'next/link'

import { ecommerce } from '@/data/ecommerce'

// ─── Componente CategoriesList ──────────────────────────────────────────────

export default function CategoriesList() {
  const categories = ecommerce.categories

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={`/categorias/${category.slug}`}
            className="block p-4 border border-zinc-200 rounded-lg hover:shadow transition"
            aria-label={`Acessar categoria ${category.name}`}
          >
            <h2 className="text-lg font-semibold text-zinc-900">{category.name}</h2>
            <p className="text-sm text-zinc-600">Ver produtos da categoria</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
