// ─── Imports ────────────────────────────────────────────────────────────────

import { Header, Footer } from '@/components/shared'

// ─── Tipagens ───────────────────────────────────────────────────────────────

interface IMainLayoutProps {
  children: React.ReactNode
}

// ─── Componente MainLayout ──────────────────────────────────────────────────

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo principal centralizado */}
      <main
        className="flex justify-center w-full pt-[var(--header-height)] px-6"
        aria-label="Conteúdo principal"
      >
        <div className="w-full max-w-[var(--wrapper-width)]">{children}</div>
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  )
}
