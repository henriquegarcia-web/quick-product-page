import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex justify-center w-full min-h-screen pt-[var(--header-height)] px-6">
        <div className="flex flex-col w-full max-w-[var(--wrapper-width)] py-8">{children}</div>
      </main>
      <Footer />
    </>
  )
}
