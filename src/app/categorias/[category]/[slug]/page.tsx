'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { useParams } from 'next/navigation'

import { useProductSelection } from '@/hooks/useProductSelection'
import {
  ImageGallery,
  ProductInfo,
  ProductPrice,
  VariantSelector,
  DeliveryChecker,
  Breadcrumb,
  BuyButton,
} from '@/components/product'

// ─── Componente ProductDetailPage ───────────────────────────────────────────

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>()

  const {
    product,
    category,
    currentVariant,
    colors,
    sizes,
    selectedColor,
    selectedSize,
    selectedSizeData,
    availableSizes,
    setSelectedColor,
    setSelectedSize,
  } = useProductSelection(params.slug)

  // Produto não encontrado
  if (!product || !currentVariant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-zinc-600">
        Produto não encontrado ou indisponível.
      </div>
    )
  }

  return (
    <div
      className="flex flex-col min-h-[calc(100vh-var(--header-height))] py-8"
      aria-label={`Página do produto ${product.name}`}
    >
      {/* Breadcrumb */}
      <Breadcrumb
        category={{ name: category?.name || '', slug: category?.slug || '' }}
        product={{ name: product.name, slug: product.slug }}
      />

      {/* Conteúdo principal */}
      <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
        {/* Galeria de imagens */}
        <div className="w-full md:w-[35vw] md:max-w-[540px]">
          <ImageGallery images={currentVariant.images} />
        </div>

        {/* Informações do produto */}
        <div className="w-full flex flex-1 flex-col gap-6">
          <ProductInfo title={product.name} description={product.description} />

          <ProductPrice price={selectedSizeData?.price} stock={selectedSizeData?.stock || 0} />

          <VariantSelector
            colors={colors}
            sizes={sizes}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onSelectColor={setSelectedColor}
            onSelectSize={setSelectedSize}
            availableSizes={availableSizes}
          />

          {/* Botões de ação */}
          <div className="flex flex-col gap-2 mt-3 mb-1">
            <BuyButton
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              mode="cart"
            />
            <BuyButton
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              mode="buy"
            />
          </div>

          <DeliveryChecker />
        </div>
      </div>
    </div>
  )
}
