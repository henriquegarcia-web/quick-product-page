import { Breadcrumb } from '@/components/shared'
import {
  ImageGallery,
  ProductInfo,
  ProductPrice,
  VariantSelector,
  DeliveryChecker,
} from '@/components'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Camisetas', href: '/categorias/camisetas' },
  { label: 'Camiseta Azul GG', href: '/produtos/camiseta-azul-gg', isCurrent: true },
]

export default function ProductDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
        {/* Imagem do Produto */}
        <div className="w-full md:w-[35%]">
          <ImageGallery />
        </div>

        {/* Informações do Produto */}
        <div className="w-full md:w-[65%] flex flex-col gap-6">
          <ProductInfo />
          <ProductPrice />
          <VariantSelector />
          <DeliveryChecker />
        </div>
      </div>
    </div>
  )
}
