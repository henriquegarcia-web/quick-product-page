'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useSearchParams, useRouter } from 'next/navigation'
import { useMemo, useState, useEffect } from 'react'

import { ecommerce } from '@/data/ecommerce'

import type { IProduct, IProductVariant, IProductSize } from '@/types/product'

// ─── Hook useProductDetail ──────────────────────────────────────────────────

export function useProductDetail(slug: string) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // ─── Estado de carregamento ───────────────────────────────────────────────
  const [loading, setLoading] = useState(true)

  // ─── Produto com base no slug ─────────────────────────────────────────────
  const [product, setProduct] = useState<IProduct | undefined>()
  const [categoryId, setCategoryId] = useState<string | null>(null)

  useEffect(() => {
    const matchedProduct = ecommerce.products.find((p) => p.slug === slug)

    if (!matchedProduct) {
      router.replace('/404')
      return
    }

    setProduct(matchedProduct)
    setCategoryId(matchedProduct.categoryId)
    setLoading(false)
  }, [slug, router])

  // ─── Categoria correspondente ao produto ──────────────────────────────────
  const category = useMemo(() => {
    return ecommerce.categories.find((c) => c.id === categoryId)
  }, [categoryId])

  // ─── Parâmetros da URL ────────────────────────────────────────────────────
  const paramColor = searchParams.get('cor') || ''
  const paramSize = searchParams.get('tamanho') || ''

  // ─── Variante padrão com primeiro tamanho disponível ──────────────────────
  const defaultVariant = useMemo(() => {
    if (!product) return undefined

    for (const variant of product.variants) {
      const availableSize = variant.sizes.find((s) => s.stock > 0)
      if (availableSize) {
        return {
          color: variant.color,
          size: availableSize.size,
        }
      }
    }
    return undefined
  }, [product])

  // ─── Cor e tamanho selecionados (prioridade: URL > default) ───────────────
  const selectedColor = paramColor || defaultVariant?.color || ''
  const selectedSize = paramSize || defaultVariant?.size || ''

  // ─── Variante atual baseada na cor selecionada ────────────────────────────
  const currentVariant = useMemo<IProductVariant | undefined>(() => {
    return product?.variants.find((v) => v.color.toLowerCase() === selectedColor.toLowerCase())
  }, [product, selectedColor])

  // ─── Tamanhos disponíveis com estoque > 0 ─────────────────────────────────
  const availableSizes = useMemo<string[]>(() => {
    return currentVariant?.sizes.filter((s) => s.stock > 0).map((s) => s.size) || []
  }, [currentVariant])

  // ─── Dados da variação com o tamanho selecionado ──────────────────────────
  const selectedSizeData = useMemo<IProductSize | undefined>(() => {
    return currentVariant?.sizes.find((s) => s.size === selectedSize)
  }, [currentVariant, selectedSize])

  // ─── Lista de cores disponíveis ───────────────────────────────────────────
  const colors = useMemo(() => {
    return product?.variants.map((v) => v.color) || []
  }, [product])

  // ─── Lista de tamanhos disponíveis (sem duplicatas) ───────────────────────
  const sizes = useMemo(() => {
    return [...new Set(product?.variants.flatMap((v) => v.sizes.map((s) => s.size)) || [])]
  }, [product])

  // ─── Atualiza cor e define primeiro tamanho disponível para a variante ────
  const setSelectedColor = (color: string) => {
    const variant = product?.variants.find((v) => v.color.toLowerCase() === color.toLowerCase())
    if (!variant) return

    const firstAvailable = variant.sizes.find((s) => s.stock > 0)
    if (!firstAvailable) return

    const search = new URLSearchParams(searchParams.toString())
    search.set('cor', color)
    search.set('tamanho', firstAvailable.size)
    router.replace(`?${search.toString()}`)
  }

  // ─── Atualiza o tamanho selecionado ───────────────────────────────────────
  const setSelectedSize = (size: string) => {
    const search = new URLSearchParams(searchParams.toString())
    search.set('tamanho', size)
    router.replace(`?${search.toString()}`)
  }

  // ─── Retorno do Hook ──────────────────────────────────────────────────────
  return {
    product,
    category,
    currentVariant,
    selectedColor,
    selectedSize,
    selectedSizeData,
    availableSizes,
    colors,
    sizes,
    setSelectedColor,
    setSelectedSize,
    loading,
  }
}
