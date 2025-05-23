// ─── Imports ────────────────────────────────────────────────────────────────

import Link from 'next/link'

import { ecommerce } from '@/data/ecommerce'
import { ReturnLink } from '@/components/shared'

// ─── Componente CategoriesListPage ──────────────────────────────────────────

export default function CategoriesListPage() {
  const categories = ecommerce.categories

  return (
    <div
      className="flex flex-col gap-y-6 min-h-[var(--home-height)] py-8"
      aria-label="Lista de categorias de produtos"
    >
      {/* Link de retorno */}
      <ReturnLink path="/" text="Voltar para o início" />

      {/* Título */}
      <h1 className="text-2xl font-bold text-zinc-800">Categorias</h1>

      {/* Lista de categorias */}
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
    </div>
  )
}
