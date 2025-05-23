'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'

import { ecommerce } from '@/data/ecommerce'
import { Title } from '@/components/shared'

// ─── Componente CategoryTitle ───────────────────────────────────────────────

export default function CategoryTitle() {
  const params = useParams<{ category: string }>()
  const category = ecommerce.categories.find((c) => c.slug === params.category)
  if (!category) return null

  return <Title>{category.name}</Title>
}
