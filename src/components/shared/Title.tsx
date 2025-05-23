// ─── Tipagens ───────────────────────────────────────────────────────────────

interface ITitle {
  children: string
}

// ─── Componente Title ───────────────────────────────────────────────────────

export default function Title({ children }: ITitle) {
  return <h1 className="text-2xl font-bold text-zinc-800">{children}</h1>
}
