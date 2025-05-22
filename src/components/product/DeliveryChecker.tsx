'use client'

import { useState } from 'react'

export default function DeliveryChecker() {
  const [cep, setCep] = useState('')
  const [result, setResult] = useState<any>(null)

  const fetchCep = async () => {
    const cleaned = cep.replace(/\D/g, '')
    if (cleaned.length !== 8) return

    const res = await fetch(`https://viacep.com.br/ws/${cleaned}/json/`)
    const data = await res.json()
    setResult(data)
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Calcular frete</h3>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="border px-3 py-1 rounded w-full max-w-xs"
        />
        <button onClick={fetchCep} className="bg-black text-white px-4 py-1 rounded">
          OK
        </button>
      </div>

      {result?.logradouro && (
        <p className="text-sm text-zinc-700">
          Entregar em: {result.logradouro}, {result.bairro} - {result.localidade}/{result.uf}
        </p>
      )}
    </div>
  )
}
