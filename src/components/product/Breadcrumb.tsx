import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'

interface Props {
  category: {
    name: string
    slug: string
  }
  product: {
    name: string
    slug: string
  }
}

export default function Breadcrumb({ category, product }: Props) {
  return (
    <nav className="text-sm text-zinc-600 flex items-center" aria-label="breadcrumb">
      <Link href="/" className="hover:underline">
        Home
      </Link>

      <LuChevronRight className="mx-2 h-4 w-4" aria-hidden />

      <Link href={`/categorias/${category.slug}`} className="hover:underline">
        {category.name}
      </Link>

      <LuChevronRight className="mx-2 h-4 w-4" aria-hidden />

      <span className="text-zinc-900 font-medium" aria-current="page">
        {product.name}
      </span>
    </nav>
  )
}
