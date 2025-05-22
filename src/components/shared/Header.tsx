export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex justify-center w-full h-[var(--header-height)] px-6 bg-white shadow-sm">
      <div className="flex items-center w-full max-w-[var(--wrapper-width)]">
        <div className="max-w-7xl flex items-center justify-between">
          <span className="text-xl font-bold text-black">QuickShop</span>
        </div>
      </div>
    </header>
  )
}
