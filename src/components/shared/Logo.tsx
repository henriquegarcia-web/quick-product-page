import Image from 'next/image'
import { ecommerce } from '@/data/ecommerce'

export default function Logo() {
  return (
    <Image
      src={ecommerce.store.logo}
      alt="Logo da QuickShop"
      width={120}
      height={40}
      priority
      className="h-auto w-auto max-h-10"
    />
  )
}
