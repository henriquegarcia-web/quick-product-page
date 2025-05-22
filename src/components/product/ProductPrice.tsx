interface Props {
  price: number
}

export default function ProductPrice({ price }: Props) {
  return (
    <div className="text-xl font-semibold text-green-600">
      {price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}
    </div>
  )
}
