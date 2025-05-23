'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import { cn } from '@/utils/cn'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface VariantButtonProps {
  label: string
  selected: boolean
  onClick: () => void
  disabled?: boolean
}

// ─── Componente VariantButton ──────────────────────────────────────────────

export default function VariantButton({
  label,
  selected,
  onClick,
  disabled = false,
}: VariantButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      aria-disabled={disabled}
      className={cn(
        'flex items-center h-[var(--input-height)] gap-y-2 px-4 rounded-md border text-sm transition',
        disabled
          ? 'cursor-not-allowed pointer-events-none bg-zinc-100 text-zinc-400 border-zinc-200'
          : selected
            ? 'bg-zinc-900 text-white border-zinc-900'
            : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500',
        label.length <= 2 ? 'uppercase' : 'capitalize',
      )}
    >
      {label}
    </button>
  )
}
