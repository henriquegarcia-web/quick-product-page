'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ecommerce } from '@/data/ecommerce'

import type { IProduct } from '@/types/product'
import type { ICategory } from '@/types/category'

// ─── Hook useCategoryDetail ───────────────────────────────────────────────

export function useCategoryDetail() {
  const params = useParams<{ category: string }>()
  const router = useRouter()

  // ─── Estado de carregamento ─────────────────────────────────────────────
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<ICategory | null>(null)
  const [products, setProducts] = useState<IProduct[]>([])

  // ─── Carregamento inicial ───────────────────────────────────────────────
  useEffect(() => {
    const matchedCategory = ecommerce.categories.find((c) => c.slug === params.category)

    if (!matchedCategory) {
      router.replace('/404')
      return
    }

    setCategory(matchedCategory)
    setProducts(ecommerce.products.filter((p) => p.categoryId === matchedCategory.id))
    setLoading(false)
  }, [params.category, router])

  return { category, products, loading }
}
