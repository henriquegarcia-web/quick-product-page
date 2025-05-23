// ─── Imports ────────────────────────────────────────────────────────────────

import { IProduct } from '@/types/product'
import { ICategory } from '@/types/category'

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

// ─── Estrutura de Dados da Loja ─────────────────────────────────────────────

export interface IEcommerceData {
  store: IStoreInfo
  categories: ICategory[]
  products: IProduct[]
}
