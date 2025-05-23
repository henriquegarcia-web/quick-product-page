// ─── Preço do Produto ───────────────────────────────────────────────────────

export interface IProductPrice {
  current: number
  original: number
}

// ─── Tamanho do Produto ─────────────────────────────────────────────────────

export interface IProductSize {
  size: string
  stock: number
  price: IProductPrice
}

// ─── Variante do Produto ────────────────────────────────────────────────────

export interface IProductVariant {
  color: string
  images: string[]
  sizes: IProductSize[]
}

// ─── Produto ────────────────────────────────────────────────────────────────

export interface IProduct {
  id: string
  categoryId: string
  name: string
  slug: string
  description: string
  variants: IProductVariant[]
}
