'use client'

import {
  ImageGallery,
  ProductInfo,
  ProductPrice,
  VariantSelector,
  DeliveryChecker,
  Breadcrumb,
  BuyButton,
} from '@/components/product'
import { useProductSelection } from '@/hooks/useProductSelection'
import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>()

  const {
    product,
    category,
    currentVariant,
    selectedColor,
    selectedSize,
    availableSizes,
    setSelectedColor,
    setSelectedSize,
  } = useProductSelection(params.slug)

  if (!product || !currentVariant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-zinc-600">
        Produto não encontrado ou indisponível.
      </div>
    )
  }

  return (
    <>
      <Breadcrumb
        category={{ name: category?.name || '', slug: category?.slug || '' }}
        product={{ name: product.name, slug: product.slug }}
      />

      <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
        <div className="w-full md:w-[35vw] max-w-[680px]">
          <ImageGallery images={currentVariant.images} />
        </div>

        <div className="w-full flex flex-1 flex-col gap-6">
          <ProductInfo title={product.name} description={product.description} />
          <ProductPrice
            price={currentVariant?.sizes.find((s) => s.size === selectedSize)?.price}
            stock={currentVariant?.sizes.find((s) => s.size === selectedSize)?.stock || 0}
          />
          <VariantSelector
            colors={product.variants.map((v) => v.color)}
            sizes={availableSizes}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onSelectColor={setSelectedColor}
            onSelectSize={setSelectedSize}
          />
          <BuyButton
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onBuy={() => {
              console.log('Produto adicionado:', {
                slug: product.slug,
                color: selectedColor,
                size: selectedSize,
              })
            }}
          />
          <DeliveryChecker />
        </div>
      </div>
    </>
  )
}
