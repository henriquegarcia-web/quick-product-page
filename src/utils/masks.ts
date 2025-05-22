export type SupportedMask = 'currency'

type MaskInput = {
  currency: number | string
}

type MaskReturn = {
  currency: string
}

type MaskHandlers = {
  [K in SupportedMask]: (_value: MaskInput[K]) => MaskReturn[K]
}

const maskHandlers: MaskHandlers = {
  currency: (value) => {
    if (value === null || value === undefined) return 'R$ 0,00'

    const numericValue =
      typeof value === 'string'
        ? parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.'))
        : value

    if (isNaN(numericValue)) return 'R$ 0,00'

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numericValue)
  },
}

export function applyMask<K extends SupportedMask>(
  value: MaskInput[K],
  maskType: K,
): MaskReturn[K] {
  const formatter = maskHandlers[maskType]
  if (!formatter) {
    throw new Error(`Máscara não implementada: "${maskType}"`)
  }
  return formatter(value)
}
