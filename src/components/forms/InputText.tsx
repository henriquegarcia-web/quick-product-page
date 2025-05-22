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
    <div className="w-full max-w-xs">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded outline-none transition ${
          error ? 'border-red-500' : 'border-zinc-300 focus:border-zinc-500'
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
