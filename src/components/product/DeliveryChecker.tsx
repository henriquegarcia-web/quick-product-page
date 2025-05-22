'use client'

import { useState } from 'react'

import { fetchCepData } from '@/lib/viacep'
import { isValidCep } from '@/utils/validations'
import { applyMask } from '@/utils/masks'
import { InputText } from '@/components/forms'

export default function DeliveryChecker() {
  const [cep, setCep] = useState('')
  const [result, setResult] = useState<Awaited<
    ReturnType<typeof fetchCepData>
  > | null>(null)
  const [error, setError] = useState('')

  const handleChangeCep = (value: string) => {
    const masked = applyMask(value, 'cep')
    setCep(masked)
    if (error) setError('')
  }

  const handleFetch = async () => {
    if (!isValidCep(cep)) {
      setError('CEP inválido. Insira no formato 00000-000.')
      setResult(null)
      return
    }

    const data = await fetchCepData(cep)
    if (!data) {
      setError('CEP não encontrado.')
      setResult(null)
      return
    }

    setResult(data)
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Calcular frete</h3>
      <div className="flex gap-2 items-end">
        <InputText
          value={cep}
          onChange={handleChangeCep}
          placeholder="Digite seu CEP"
          error={error}
        />
        <button
          onClick={handleFetch}
          className="bg-black text-white px-4 py-2 rounded text-sm"
        >
          OK
        </button>
      </div>

      {result && (
        <p className="text-sm text-zinc-700">
          Entregar em: {result.logradouro}, {result.bairro} - {result.localidade}/
          {result.uf}
        </p>
      )}
    </div>
  )
}
