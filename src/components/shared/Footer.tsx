export default function Footer() {
  return (
    <footer className="flex w-full h-[var(--footer-height)] justify-center items-center px-6 bg-zinc-100 text-center">
      <span className="text-sm text-zinc-500">
        {new Date().getFullYear()} QuickShop. Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/henrique-garcia-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-zinc-600 hover:text-zinc-800"
        >
          Henrique Garcia
        </a>
      </span>
    </footer>
  )
}
