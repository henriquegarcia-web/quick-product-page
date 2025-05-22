import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex justify-center w-full h-screen pt-[var(--header-height)] px-6">
        <div className="w-full max-w-[var(--wrapper-width)] pt-6">{children}</div>
      </main>
      <Footer />
    </>
  )
}
