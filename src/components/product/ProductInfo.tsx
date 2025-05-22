import { ExpandableText } from '@/components/product'

interface Props {
  title: string
  description: string
}

export default function ProductInfo({ title, description }: Props) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>
      <ExpandableText>{description}</ExpandableText>
    </div>
  )
}
