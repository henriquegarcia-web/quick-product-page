import {
  ImageGallery,
  ProductInfo,
  ProductPrice,
  VariantSelector,
  DeliveryChecker,
  Breadcrumb,
} from '@/components/product'

import { ecommerce } from '@/data/ecommerce'

const product = ecommerce.products[0]
const category = ecommerce.categories.find((c) => c.id === product.categoryId)

export default function ProductDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb
        category={{
          name: category?.name || '',
          slug: category?.slug || '',
        }}
        product={{
          name: product.name,
          slug: product.slug,
        }}
      />

      <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
        {/* Imagem do Produto */}
        <div className="w-full md:w-[35%]">
          <ImageGallery images={product.images} />
        </div>

        {/* Informações do Produto */}
        <div className="w-full md:w-[65%] flex flex-col gap-6">
          <ProductInfo title={product.name} description={product.description} />
          <ProductPrice price={product.price} />
          <VariantSelector sizes={product.sizes} colors={product.colors} />
          <DeliveryChecker />
        </div>
      </div>
    </div>
  )
}
