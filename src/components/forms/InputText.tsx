'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { cn } from '@/utils/cn'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface IInputTextProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  type?: string
}

// ─── Componente InputText ───────────────────────────────────────────────────

export default function InputText({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
}: IInputTextProps) {
  return (
    <div className="w-full space-y-1">
      {/* Rótulo (label) */}
      {label && (
        <label className="block text-sm font-medium text-zinc-700" htmlFor={label}>
          {label}
        </label>
      )}

      {/* Campo de texto */}
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label || placeholder || 'Campo de texto'}
        aria-invalid={!!error}
        className={cn(
          'w-full h-[var(--input-height)] px-3 text-sm rounded-md border outline-none transition',
          error ? 'border-red-500' : 'border-zinc-300 focus:border-zinc-500',
        )}
      />

      {/* Mensagem de erro */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
