// ─── Componente Header ──────────────────────────────────────────────────────

import Logo from '@/components/shared/Logo'

export default function Header() {
  return (
    <header
      className="fixed top-0 z-50 flex justify-center w-full h-[var(--header-height)] px-6 bg-white shadow-sm"
      aria-label="Cabeçalho da aplicação"
    >
      <div className="flex items-center w-full max-w-[var(--wrapper-width)]">
        {/* Container do logo */}
        <div className="max-w-7xl flex items-center justify-between">
          <Logo />
        </div>
      </div>
    </header>
  )
}
