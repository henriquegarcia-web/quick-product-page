'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { Title } from '@/components/shared'
import { useCategoryDetail } from '@/hooks/useCategoryDetail'

// ─── Componente CategoryTitle ───────────────────────────────────────────────

export default function CategoryTitle() {
  const { category, loading } = useCategoryDetail()

  if (loading) return <CategoryTitleSkeleton />

  if (!category) return null

  return <Title>{category.name}</Title>
}

// ─── CategoryTitle Skeleton ─────────────────────────────────────────────────

function CategoryTitleSkeleton() {
  return <div className="h-8 w-56 bg-zinc-100 animate-pulse rounded" />
}
