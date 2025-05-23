// ─── Imports ────────────────────────────────────────────────────────────────

import { ecommerce } from '@/data/ecommerce'

import type { IProduct } from '@/types/product'

// ─── Função: Buscar Produto por Slug ────────────────────────────────────────

export async function getProductBySlug(slug: string): Promise<IProduct | null> {
  // Simula uma operação assíncrona de busca
  const product = ecommerce.products.find((product) => product.slug === slug)
  return product || null
}
