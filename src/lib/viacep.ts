import { IViaCepResponse } from '@/types/viacep'

export async function fetchCepData(cep: string): Promise<IViaCepResponse | null> {
  const cleaned = cep.replace(/\D/g, '')

  if (cleaned.length !== 8) return null

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cleaned}/json/`)
    const data = (await res.json()) as IViaCepResponse

    if (data.erro) return null

    return data
  } catch (err) {
    console.error('Erro ao buscar CEP:', err)
    return null
  }
}
