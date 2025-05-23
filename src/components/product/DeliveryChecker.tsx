'use client'

import { useState } from 'react'
import { LuMapPin } from 'react-icons/lu'

import { fetchCepData } from '@/lib/viacep'
import { isValidCep } from '@/utils/validations'
import { applyMask } from '@/utils/masks'
import { Button, InputText } from '@/components/forms'

export default function DeliveryChecker() {
  const [cep, setCep] = useState('')
  const [result, setResult] = useState<Awaited<ReturnType<typeof fetchCepData>> | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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

    setLoading(true)

    const data = await fetchCepData(cep)
    setLoading(false)

    if (!data) {
      setError('CEP não encontrado.')
      setResult(null)
      return
    }

    setResult(data)
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-zinc-800">Calcular Frete</h3>
      <div className="flex items-start gap-2">
        <InputText
          value={cep}
          onChange={handleChangeCep}
          placeholder="Digite seu CEP"
          error={error}
        />
        <Button onClick={handleFetch} loading={loading}>
          OK
        </Button>
      </div>
      {result && (
        <div className="flex items-center gap-2 p-3 rounded-md border border-zinc-300">
          <LuMapPin className="text-xl" />
          <p className="text-sm text-zinc-700">
            <b>Entregar em:</b> {result.logradouro}, {result.bairro} - {result.localidade}/
            {result.uf}
          </p>
        </div>
      )}
    </div>
  )
}
