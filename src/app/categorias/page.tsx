// ─── Imports ────────────────────────────────────────────────────────────────

import { CategoriesList } from '@/components/category'
import { ReturnLink, Title } from '@/components/shared'

// ─── Componente CategoriesListPage ──────────────────────────────────────────

export default function CategoriesListPage() {
  return (
    <div
      className="flex flex-col gap-y-6 min-h-[var(--home-height)] py-8"
      aria-label="Lista de categorias de produtos"
    >
      {/* Link de retorno */}
      <ReturnLink path="/" text="Voltar para o início" />

      {/* Título */}
      <Title>Categorias</Title>

      {/* Lista de categorias */}
      <CategoriesList />
    </div>
  )
}
