import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Appzinho Next.js',
  description: 'Provinha de conceito tentando realizar tarefas básicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='navegacao-principal'>
          <Link href="/">Início</Link>
          <Link href="/servidor/37550001">Página renderizada no servidor</Link>
          <Link href="/cliente">Página renderizada no cliente</Link>
          <Link href="/contexto">Compartilhando contexto</Link>
        </nav>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}
