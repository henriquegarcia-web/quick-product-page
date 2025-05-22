export interface IStoreInfo {
  name: string
  logo: string
  description: string
}

export interface ICategory {
  id: string
  name: string
  slug: string
}

export interface IProductVariant {
  color: string
  images: string[]
  sizes: {
    size: string
    stock: number
  }[]
}

export interface IProduct {
  id: string
  categoryId: string
  name: string
  slug: string
  description: string
  price: number
  variants: IProductVariant[]
}

export interface IEcommerceData {
  store: IStoreInfo
  categories: ICategory[]
  products: IProduct[]
}
