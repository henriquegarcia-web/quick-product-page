// ─── Imports ────────────────────────────────────────────────────────────────

import '@/styles/globals.css'

import { openSans } from '@/lib/fonts'
import { mainMetadata } from '@/config/metadata'
import { MainLayout } from '@/components/shared'

// ─── Metadados da Aplicação ─────────────────────────────────────────────────

export const metadata = mainMetadata

// ─── Componente RootLayout ──────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.variable} font-sans antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
