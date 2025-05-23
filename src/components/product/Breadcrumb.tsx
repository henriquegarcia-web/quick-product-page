'use client'

// ─── Componente Breadcrumb ─────────────────────────────────────────────────

import { useProductSelection } from '@/hooks/useProductSelection'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { LuChevronRight } from 'react-icons/lu'

// ─── Componente Breadcrumb ──────────────────────────────────────────────────

export default function Breadcrumb() {
  const params = useParams<{ slug: string }>()
  const { product, category } = useProductSelection(params.slug)

  if (!product) return null

  const curCategory = { name: category?.name || '', slug: category?.slug || '' }
  const curProduct = { name: product.name, slug: product.slug }

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
      <Link href={`/categorias/${curCategory.slug}`} className="hover:underline">
        {curCategory.name}
      </Link>

      {/* Separador */}
      <LuChevronRight className="mx-2 h-4 w-4" aria-hidden />

      {/* Página atual */}
      <span className="text-zinc-900 font-medium line-clamp-1" aria-current="page">
        {curProduct.name}
      </span>
    </nav>
  )
}
