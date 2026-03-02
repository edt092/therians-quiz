import type { Metadata } from 'next'
import { Cinzel, Raleway } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cinzel',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Animal Secreto — Descubre tu Instinto Real',
  description:
    '¿Cuál es el animal que vive dentro de ti? Haz el test de 15 preguntas y descubre tu instinto real. Lobo, Zorro, Gato, Águila, Ciervo o Tigre.',
  keywords:
    'animal secreto, test personalidad, quiz instinto, descubre tu animal, test psicológico',
  openGraph: {
    title: 'Animal Secreto — Descubre tu Instinto Real',
    description:
      '¿Cuál es el animal que vive dentro de ti? Haz el test y descúbrelo.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Animal Secreto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Animal Secreto — Descubre tu Instinto Real',
    description:
      '¿Cuál es el animal que vive dentro de ti? Haz el test y descúbrelo.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${raleway.variable}`}
    >
      <head>
        <Script
          src="https://pl28831521.effectivegatecpm.com/26/d2/e1/26d2e1a50bd594ee3f704e963c59edd7.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
