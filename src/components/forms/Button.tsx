'use client'

import Link from 'next/link'
import { ImSpinner9 } from 'react-icons/im'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'link'
}

export default function Button({
  children,
  to = '/',
  onClick = () => {},
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  if (type === 'link')
    return (
      <Link
        href={to}
        className={`flex items-center justify-center h-[var(--input-height)] gap-y-2 px-4 rounded-md text-sm font-medium transition 
        ${disabled || loading ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed' : 'bg-zinc-900 text-white hover:bg-zinc-800'} 
        ${className}`}
      >
        {loading && <ImSpinner9 className="w-4 h-4 animate-spin text-inherit" />}
        {children}
      </Link>
    )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex items-center justify-center h-[var(--input-height)] gap-y-2 px-4 rounded-md text-sm font-medium transition 
        ${disabled || loading ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed' : 'bg-zinc-900 text-white hover:bg-zinc-800'} 
        ${className}`}
    >
      {loading && <ImSpinner9 className="w-4 h-4 animate-spin text-inherit" />}
      {children}
    </button>
  )
}
