// ─── Componente Logo ────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'

import { ecommerce } from '@/data/ecommerce'

export default function Logo() {
  return (
    <Link href="/" aria-label="Ir para a página inicial">
      <Image
        src={ecommerce.store.logo}
        alt="Logo da QuickShop"
        width={146}
        height={44}
        priority
        className="h-auto w-auto max-h-14"
      />
    </Link>
  )
}
