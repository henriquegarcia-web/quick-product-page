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

export interface ICategory {
  id: string
  name: string
  slug: string
}

export interface IProductPrice {
  current: number
  original?: number
}

export interface IProductSize {
  size: string
  stock: number
  price: IProductPrice
}

export interface IProductVariant {
  color: string
  images: string[]
  sizes: IProductSize[]
}

export interface IProduct {
  id: string
  categoryId: string
  name: string
  slug: string
  description: string
  variants: IProductVariant[]
}

export interface IEcommerceData {
  store: IStoreInfo
  categories: ICategory[]
  products: IProduct[]
}
