// ─── Componente Home ────────────────────────────────────────────────────────

import { Button } from '@/components/forms'

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-center h-[var(--home-height)] py-8 text-center"
      aria-label="Seção inicial da homepage"
    >
      {/* Título principal */}
      <h1 className="mb-4 text-4xl font-bold text-zinc-800">
        Bem-vindo à <b className="text-[var(--brand-primary)]">QuickShop</b>
      </h1>

      {/* Descrição */}
      <p className="mb-6 text-zinc-600 text-base">
        Explore nossas categorias e encontre produtos incríveis com qualidade, conforto e estilo.
      </p>

      {/* Call to action */}
      <Button to="/categorias" type="link">
        Ver categorias
      </Button>
    </section>
  )
}
