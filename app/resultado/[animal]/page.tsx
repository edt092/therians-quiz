import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { animals, animalKeys, type AnimalKey } from '@/lib/animals'
import ShareButtons from '@/components/ShareButtons'

interface Props {
  params: Promise<{ animal: string }>
  searchParams: Promise<{ pct?: string }>
}

export function generateStaticParams() {
  return animalKeys.map((key) => ({ animal: key }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { animal: animalKey } = await params
  const animal = animals[animalKey as AnimalKey]
  if (!animal) return {}
  return {
    title: animal.seoTitle,
    description: animal.seoDescription,
    keywords: animal.seoKeywords,
    openGraph: {
      title: animal.seoTitle,
      description: animal.seoDescription,
      type: 'website',
      locale: 'es_ES',
      siteName: 'Animal Secreto',
    },
    twitter: {
      card: 'summary_large_image',
      title: animal.seoTitle,
      description: animal.seoDescription,
    },
  }
}

export default async function ResultPage({ params, searchParams }: Props) {
  const { animal: animalKey } = await params
  const { pct } = await searchParams
  const animal = animals[animalKey as AnimalKey]
  if (!animal) notFound()

  const rawPct = parseInt(pct ?? '82', 10)
  const percentage = isNaN(rawPct) ? 82 : Math.min(96, Math.max(65, rawPct))

  return (
    <main
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-start"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 20%, ${animal.gradientMid} 0%, ${animal.gradientFrom} 60%, #030309 100%)`,
      }}
    >
      {/* Ambient glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center top, ${animal.glowColor} 0%, transparent 65%)`,
          opacity: 0.35,
        }}
      />

      {/* Back link */}
      <div
        className="relative z-10 w-full max-w-2xl px-5 pt-7"
        style={{ animation: 'fadeIn 0.5s ease forwards' }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs font-raleway tracking-wider transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>
      </div>

      {/* Main card */}
      <div
        className="relative z-10 w-full max-w-2xl px-5 pb-16 pt-8 space-y-8"
        style={{ animation: 'fadeInUp 0.7s ease 0.1s both' }}
      >

        {/* ── Hero block (shareable) ── */}
        <div
          id="share-card"
          className="rounded-3xl border overflow-hidden"
          style={{
            borderColor: `${animal.accentColor}22`,
            background: `linear-gradient(160deg, ${animal.gradientMid} 0%, ${animal.gradientTo} 100%)`,
            boxShadow: `0 0 60px ${animal.glowColor}, 0 0 120px ${animal.glowColor.replace('0.45', '0.12')}`,
          }}
        >
          <div className="px-7 py-10 text-center space-y-5">
            {/* Emoji */}
            <div
              className="text-7xl md:text-8xl leading-none select-none"
              style={{ animation: 'scaleIn 0.6s ease 0.3s both, float 7s ease-in-out 1s infinite' }}
            >
              {animal.emoji}
            </div>

            {/* Percentage badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-cinzel tracking-[0.2em]"
              style={{
                background: `${animal.accentColor}18`,
                border: `1px solid ${animal.accentColor}35`,
                color: animal.accentColor,
                animation: 'fadeIn 0.5s ease 0.5s both',
              }}
            >
              ✦ {percentage}% {animal.name} ✦
            </div>

            {/* Name */}
            <h1
              className="font-cinzel font-semibold text-white leading-tight"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                animation: 'fadeInUp 0.5s ease 0.4s both',
              }}
            >
              {animal.name}
            </h1>

            {/* Identity statement */}
            <p
              className="text-white/75 font-raleway font-light text-base md:text-lg leading-relaxed max-w-md mx-auto italic"
              style={{ animation: 'fadeInUp 0.5s ease 0.55s both' }}
            >
              &ldquo;{animal.identity}&rdquo;
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-1">
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: `linear-gradient(90deg, transparent, ${animal.accentColor}40)` }}
              />
              <span style={{ color: `${animal.accentColor}60`, fontSize: '0.7rem' }}>✦</span>
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: `linear-gradient(270deg, transparent, ${animal.accentColor}40)` }}
              />
            </div>

            {/* Aesthetic phrase */}
            <p
              className="font-cinzel text-base md:text-lg font-normal leading-relaxed"
              style={{
                color: animal.accentColor,
                animation: 'fadeInUp 0.5s ease 0.65s both',
              }}
            >
              {animal.aesthetic}
            </p>
          </div>
        </div>

        {/* ── Traits ── */}
        <div style={{ animation: 'fadeInUp 0.5s ease 0.5s both' }}>
          <p className="text-white/25 text-[10px] font-cinzel tracking-[0.3em] uppercase mb-3 text-center">
            Tus rasgos
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {animal.traits.map((trait) => (
              <span
                key={trait}
                className="px-4 py-1.5 rounded-full text-xs font-raleway font-medium"
                style={{
                  background: `${animal.accentColor}12`,
                  border: `1px solid ${animal.accentColor}28`,
                  color: `${animal.accentColor}cc`,
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* ── Strength & Shadow ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          style={{ animation: 'fadeInUp 0.5s ease 0.6s both' }}
        >
          {/* Strength */}
          <div
            className="rounded-2xl p-5 space-y-2"
            style={{
              background: `${animal.accentColor}09`,
              border: `1px solid ${animal.accentColor}20`,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">⚡</span>
              <span
                className="text-[10px] font-cinzel tracking-[0.2em] uppercase"
                style={{ color: animal.accentColor }}
              >
                Fortaleza
              </span>
            </div>
            <p className="text-white/65 text-sm font-raleway leading-relaxed">
              {animal.strength}
            </p>
          </div>

          {/* Shadow */}
          <div className="rounded-2xl p-5 space-y-2 bg-white/[0.025] border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🌑</span>
              <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-white/35">
                Sombra
              </span>
            </div>
            <p className="text-white/45 text-sm font-raleway leading-relaxed">
              {animal.shadow}
            </p>
          </div>
        </div>

        {/* ── Share section ── */}
        <div
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          style={{ animation: 'fadeInUp 0.5s ease 0.7s both' }}
        >
          <ShareButtons
            shareText={animal.shareText}
            animalEmoji={animal.emoji}
          />
        </div>

        {/* ── Retry CTA ── */}
        <div
          className="text-center pt-2"
          style={{ animation: 'fadeInUp 0.5s ease 0.8s both' }}
        >
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs font-raleway tracking-wider transition-colors duration-200 border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-xl"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
            Volver a hacer el test
          </Link>
        </div>

      </div>
    </main>
  )
}
