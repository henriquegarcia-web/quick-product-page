// ─── Imports ────────────────────────────────────────────────────────────────

import { IProduct } from '@/types/product'

// ─── Store ──────────────────────────────────────────────────────────────────

export interface IStoreInfo {
  name: string
  logo: string
  description: string
  pricing: {
    installment: {
      quantity: number
      interestFree?: boolean
    }
    pixDiscount: number
  }
}

// ─── Categorias ─────────────────────────────────────────────────────────────

export interface ICategory {
  id: string
  name: string
  slug: string
}

// ─── Estrutura de Dados da Loja ─────────────────────────────────────────────

export interface IEcommerceData {
  store: IStoreInfo
  categories: ICategory[]
  products: IProduct[]
}
