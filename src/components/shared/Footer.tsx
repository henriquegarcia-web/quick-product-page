export default function Footer() {
  return (
    <footer className="flex w-full h-[var(--footer-height)] justify-center items-center px-6 bg-zinc-100">
      <span className="text-sm text-zinc-500">
        © {new Date().getFullYear()} QuickShop. Todos os direitos reservados.
      </span>
    </footer>
  )
}
