// ─── Componente ReturnLink ─────────────────────────────────────────────────

import NextLink from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface ReturnLinkProps {
  path: string
  text: string
}

// ─── Componente ReturnLink ──────────────────────────────────────────────────

export default function ReturnLink({ path, text }: ReturnLinkProps) {
  return (
    <NextLink
      href={path}
      aria-label={`Voltar para ${text}`}
      className="flex items-center w-fit gap-x-1 text-sm text-zinc-600 opacity-80 hover:opacity-100"
    >
      {/* Ícone de seta */}
      <LuArrowLeft className="h-4 w-4" aria-hidden />

      {/* Texto do link */}
      {text}
    </NextLink>
  )
}
