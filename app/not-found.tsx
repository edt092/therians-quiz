import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-mystic-dark text-center px-5">
      <div style={{ animation: 'fadeInUp 0.6s ease forwards' }}>
        <p className="text-6xl mb-6 select-none">🌑</p>
        <h1 className="font-cinzel text-2xl text-white/70 mb-3">Página no encontrada</h1>
        <p className="text-white/30 text-sm font-raleway mb-8">
          Este animal no existe… o ya desapareció.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm font-raleway border border-gold/20 hover:border-gold/40 px-5 py-2.5 rounded-xl transition-all duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
