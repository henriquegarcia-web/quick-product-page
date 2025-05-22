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

export type Size = 'P' | 'M' | 'G' | 'GG'
export type Color = 'Azul' | 'Branco'

export interface IProduct {
  id: string
  categoryId: string
  name: string
  slug: string
  description: string
  images: string[]
  price: number
  sizes: Size[]
  colors: Color[]
  stock: Record<`${Size}-${Color}`, number>
}

export interface IEcommerceData {
  store: IStoreInfo
  categories: ICategory[]
  products: IProduct[]
}
