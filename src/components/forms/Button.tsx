'use client'

// ─── Imports ────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { ImSpinner9 } from 'react-icons/im'

import { cn } from '@/utils/cn'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface IButtonProps {
  children: React.ReactNode
  to?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'link'
}

// ─── Componente Button ──────────────────────────────────────────────────────

export default function Button({
  children,
  to = '/',
  onClick = () => {},
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
}: IButtonProps) {
  const isDisabled = disabled || loading

  const content = (
    <>
      {loading && <ImSpinner9 className="w-4 h-4 animate-spin text-inherit" />}
      {children}
    </>
  )

  const buttonStyle = cn(
    'flex items-center justify-center h-[var(--input-height)] gap-y-2 px-4 rounded-md text-sm font-medium transition',
    isDisabled
      ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
      : 'bg-zinc-900 text-white hover:bg-zinc-800',
    className,
  )

  // Para links
  if (type === 'link') {
    return (
      <Link href={to} aria-disabled={isDisabled} aria-busy={loading} className={buttonStyle}>
        {content}
      </Link>
    )
  }

  // Para botões normais e submit
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={buttonStyle}
    >
      {content}
    </button>
  )
}
