'use client'

interface InputTextProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  type?: string
}

export default function InputText({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
}: InputTextProps) {
  return (
    <div className="w-full space-y-1">
      {label && <label className="block text-sm font-medium text-zinc-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-[var(--input-height)] px-3 text-sm rounded-md border outline-none transition
          ${error ? 'border-red-500' : 'border-zinc-300 focus:border-zinc-500'}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
