// ─── Componente ProductInfo ─────────────────────────────────────────────────

import { ExpandableText } from '@/components/product'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface ProductInfoProps {
  title: string
  description: string
}

// ─── Componente ProductInfo ─────────────────────────────────────────────────

export default function ProductInfo({ title, description }: ProductInfoProps) {
  return (
    <div className="space-y-3">
      {/* Título do produto */}
      <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>

      {/* Descrição com texto expansível */}
      <ExpandableText>{description}</ExpandableText>
    </div>
  )
}
