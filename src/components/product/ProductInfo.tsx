interface Props {
  title: string
  description: string
}

export default function ProductInfo({ title, description }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
    </div>
  )
}
