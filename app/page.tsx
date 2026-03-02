import Link from 'next/link'

const FLOATING_ANIMALS = [
  { emoji: '🐺', delay: '0s',   dur: '7s',   x: '8%',   y: '18%',  size: '3.2rem', opacity: 0.07 },
  { emoji: '🦊', delay: '1.2s', dur: '9s',   x: '82%',  y: '12%',  size: '2.8rem', opacity: 0.06 },
  { emoji: '🐈‍⬛', delay: '2.5s', dur: '8s',   x: '15%',  y: '72%',  size: '2.6rem', opacity: 0.06 },
  { emoji: '🦅', delay: '0.8s', dur: '10s',  x: '75%',  y: '65%',  size: '3rem',   opacity: 0.07 },
  { emoji: '🦌', delay: '3s',   dur: '8.5s', x: '50%',  y: '80%',  size: '2.5rem', opacity: 0.05 },
  { emoji: '🐯', delay: '1.8s', dur: '9.5s', x: '88%',  y: '45%',  size: '2.9rem', opacity: 0.06 },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-mystic-dark px-5">

      {/* Deep background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(60,40,120,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Floating animal emojis */}
      {FLOATING_ANIMALS.map((a, i) => (
        <div
          key={i}
          className="absolute select-none pointer-events-none"
          style={{
            left: a.x,
            top: a.y,
            fontSize: a.size,
            opacity: a.opacity,
            animation: `float ${a.dur} ease-in-out ${a.delay} infinite`,
          }}
        >
          {a.emoji}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">

        {/* Top label */}
        <div
          className="mb-8 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/[0.05]"
          style={{ animation: 'fadeInUp 0.6s ease 0.1s both' }}
        >
          <span className="text-gold/70 text-[10px] font-cinzel tracking-[0.3em] uppercase">
            Test de Personalidad
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-cinzel font-semibold leading-none mb-3"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 5rem)',
            animation: 'fadeInUp 0.7s ease 0.2s both',
          }}
        >
          <span className="text-shimmer-gold">Animal</span>
          <br />
          <span className="text-white">Secreto</span>
        </h1>

        {/* Divider */}
        <div
          className="flex items-center gap-3 my-6"
          style={{ animation: 'fadeInUp 0.6s ease 0.35s both' }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/50 text-xs font-cinzel tracking-widest">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* Subtitle */}
        <p
          className="text-white/55 text-base font-raleway font-light tracking-wide mb-2"
          style={{ animation: 'fadeInUp 0.6s ease 0.45s both' }}
        >
          Descubre tu Instinto Real
        </p>

        {/* Body copy */}
        <p
          className="text-white/35 text-sm font-raleway leading-relaxed mb-10 max-w-sm"
          style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
        >
          Todos llevamos un animal dentro.
          <br />
          La pregunta es: ¿tienes el valor de conocerlo?
        </p>

        {/* Animal row */}
        <div
          className="flex gap-3 mb-12 text-3xl"
          style={{ animation: 'fadeInUp 0.6s ease 0.65s both' }}
        >
          {['🐺', '🦊', '🐈‍⬛', '🦅', '🦌', '🐯'].map((e, i) => (
            <span
              key={i}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {e}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/quiz"
          className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-cinzel text-sm tracking-[0.12em] uppercase text-mystic-dark font-semibold transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 animate-pulse-gold"
          style={{
            background: 'linear-gradient(135deg, #c9a84c 0%, #e8c96b 50%, #c9a84c 100%)',
            animation: 'fadeInUp 0.6s ease 0.75s both, pulseGold 2.5s ease-in-out 1.4s infinite',
          }}
        >
          Descubrir mi Animal
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Meta info */}
        <p
          className="mt-6 text-white/20 text-[11px] font-raleway tracking-widest"
          style={{ animation: 'fadeInUp 0.6s ease 0.9s both' }}
        >
          15 preguntas &nbsp;·&nbsp; 6 animales &nbsp;·&nbsp; 1 verdad
        </p>
      </div>

      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
      />
    </main>
  )
}
