'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'

import { useProductSelection } from '@/hooks/useProductSelection'

// ─── Componente Breadcrumb ─────────────────────────────────────────────────

export default function Breadcrumb() {
  const params = useParams<{ slug: string }>()
  const { product, category, loading } = useProductSelection(params.slug)

  if (loading) {
    return <div className="h-6 w-60 bg-zinc-100 animate-pulse rounded-md" />
  }

  if (!product || !category) return null

  return (
    <nav
      className="flex items-center w-fit text-sm text-zinc-600"
      aria-label="Caminho de navegação (breadcrumb)"
    >
      {/* Link: Home */}
      <Link href="/" className="hover:underline">
        Home
      </Link>

      {/* Separador */}
      <LuChevronRight className="mx-2 h-4 w-4" aria-hidden />

      {/* Link: Categoria */}
      <Link href={`/categorias/${category.slug}`} className="hover:underline">
        {category.name}
      </Link>

      {/* Separador */}
      <LuChevronRight className="mx-2 h-4 w-4" aria-hidden />

      {/* Página atual */}
      <span className="text-zinc-900 font-medium line-clamp-1" aria-current="page">
        {product.name}
      </span>
    </nav>
  )
}
