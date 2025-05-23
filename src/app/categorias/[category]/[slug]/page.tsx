// ─── Imports ────────────────────────────────────────────────────────────────

import { Metadata } from 'next'

import { getProductBySlug } from '@/services/products'
import {
  ImageGallery,
  ProductInfo,
  ProductPrice,
  VariantSelector,
  DeliveryChecker,
  Breadcrumb,
  BuyButton,
} from '@/components/product'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produto não encontrado - QuickShop',
    }
  }

  return {
    title: `${product.name} - QuickShop`,
    description: product.description,
  }
}

// ─── Componente ProductDetailPage ───────────────────────────────────────────

export default function ProductDetailPage() {
  return (
    <div
      className="flex flex-col min-h-[calc(100vh-var(--header-height))] py-8"
      aria-label={`Página do produto`}
    >
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Conteúdo principal */}
      <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
        {/* Galeria de imagens */}
        <div className="w-full md:w-[35vw] md:max-w-[540px]">
          <ImageGallery />
        </div>

        {/* Informações do produto */}
        <div className="w-full flex flex-1 flex-col gap-6">
          <ProductInfo />
          <ProductPrice />
          <VariantSelector />

          {/* Botões de ação */}
          <div className="flex flex-col gap-2 mt-3 mb-1">
            <BuyButton mode="cart" />
            <BuyButton mode="buy" />
          </div>

          <DeliveryChecker />
        </div>
      </div>
    </div>
  )
}
