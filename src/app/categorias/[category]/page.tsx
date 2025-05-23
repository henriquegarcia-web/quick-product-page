// ─── Imports ────────────────────────────────────────────────────────────────

import { ReturnLink } from '@/components/shared'
import { CategoryTitle, CategoryProductsList } from '@/components/category'

// ─── Componente CategoryDetailPage ──────────────────────────────────────────

export default function CategoryDetailPage() {
  return (
    <div
      className="flex flex-col gap-y-6 min-h-[var(--home-height)] py-8"
      aria-label="Página da categoria"
    >
      {/* Link de retorno*/}
      <ReturnLink path="/categorias" text="Ver todas as categorias" />

      {/* Título da categoria */}
      <CategoryTitle />

      {/* Lista de produtos da categoria */}
      <CategoryProductsList />
    </div>
  )
}
