'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { questions } from '@/lib/questions'
import { calculateResult } from '@/lib/scoring'
import ProgressBar from './ProgressBar'

type Phase = 'quiz' | 'loading'

const MICROCOPY = [
  'Confía en tu primer instinto…',
  'No hay respuestas correctas, solo verdades…',
  'Siente la respuesta antes de pensarla…',
  'Tu instinto ya sabe quién eres…',
  'Ya casi descubres tu verdadero animal…',
  'El universo está tomando nota…',
]

const LOADING_TEXTS = [
  'Analizando tu energía…',
  'Leyendo tu instinto…',
  'Consultando el universo…',
  'Revelando tu esencia…',
]

export default function QuizFlow() {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('quiz')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [animState, setAnimState] = useState<'in' | 'out'>('in')
  const [loadingText, setLoadingText] = useState(0)

  const adInjected = useRef(false)

  const question = questions[currentIndex]
  const progress = ((currentIndex) / questions.length) * 100
  const microcopy = MICROCOPY[Math.min(
    Math.floor((currentIndex / questions.length) * MICROCOPY.length),
    MICROCOPY.length - 1
  )]

  // Inject popunder script exactly when the last question renders
  // so the script is loaded and ready when the user clicks their final answer
  useEffect(() => {
    if (currentIndex !== questions.length - 1 || adInjected.current) return
    adInjected.current = true
    const script = document.createElement('script')
    script.src = 'https://pl28831521.effectivegatecpm.com/26/d2/e1/26d2e1a50bd594ee3f704e963c59edd7.js'
    document.head.appendChild(script)
  }, [currentIndex])

  // Cycle loading text
  useEffect(() => {
    if (phase !== 'loading') return
    const iv = setInterval(() => {
      setLoadingText((t) => (t + 1) % LOADING_TEXTS.length)
    }, 600)
    return () => clearInterval(iv)
  }, [phase])

  const handleSelect = useCallback(
    (answerId: string) => {
      if (selectedId !== null || animState === 'out') return

      setSelectedId(answerId)

      const newAnswers = { ...answers, [question.id]: answerId }

      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setAnimState('out')
          setTimeout(() => {
            setCurrentIndex((i) => i + 1)
            setSelectedId(null)
            setAnimState('in')
            setAnswers(newAnswers)
          }, 280)
        } else {
          setAnswers(newAnswers)
          setPhase('loading')
          setTimeout(() => {
            const result = calculateResult(newAnswers)
            router.push(`/resultado/${result.animal}?pct=${result.percentage}`)
          }, 2200)
        }
      }, 380)
    },
    [selectedId, animState, answers, question, currentIndex, router]
  )

  if (phase === 'loading') {
    return <LoadingScreen text={LOADING_TEXTS[loadingText]} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-mystic-dark">
      <ProgressBar
        progress={progress}
        current={currentIndex + 1}
        total={questions.length}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-5 pt-24 pb-12 max-w-2xl mx-auto w-full">
        {/* Question number */}
        <span
          className="text-gold/40 text-[11px] font-mono tracking-[0.3em] uppercase mb-6 block"
          style={{
            opacity: animState === 'out' ? 0 : 1,
            transition: 'opacity 0.28s ease',
          }}
        >
          Pregunta {String(currentIndex + 1).padStart(2, '0')} de {questions.length}
        </span>

        {/* Question text */}
        <h2
          key={`q-${currentIndex}`}
          className="text-[1.6rem] md:text-3xl text-center text-white font-cinzel font-normal leading-relaxed mb-10"
          style={{
            opacity: animState === 'out' ? 0 : 1,
            transform: animState === 'out' ? 'translateX(-20px)' : 'translateX(0)',
            transition: 'opacity 0.28s ease, transform 0.28s ease',
            animation: animState === 'in' ? 'fadeInUp 0.5s ease forwards' : 'none',
          }}
        >
          {question.text}
        </h2>

        {/* Answers */}
        <div className="w-full space-y-3">
          {question.answers.map((answer, idx) => {
            const isSelected = selectedId === answer.id
            const isOther = selectedId !== null && selectedId !== answer.id

            return (
              <button
                key={answer.id}
                onClick={() => handleSelect(answer.id)}
                className={[
                  'w-full text-left px-5 py-4 rounded-2xl border',
                  'font-raleway text-sm md:text-[0.95rem] transition-all duration-300',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50',
                  isSelected
                    ? 'border-gold/60 bg-gold/10 text-gold shadow-[0_0_20px_rgba(201,168,76,0.15)]'
                    : isOther
                    ? 'border-white/5 bg-white/[0.015] text-white/25 scale-[0.99]'
                    : 'border-white/10 bg-white/[0.03] text-white/75 hover:border-white/25 hover:bg-white/[0.07] hover:text-white',
                ].join(' ')}
                style={{
                  opacity: animState === 'out' ? 0 : 1,
                  transform:
                    animState === 'out'
                      ? 'translateX(-16px)'
                      : 'translateX(0)',
                  transition: `opacity 0.28s ease ${idx * 0.03}s, transform 0.28s ease ${idx * 0.03}s, border-color 0.2s, background-color 0.2s, color 0.2s`,
                  animationDelay: `${0.08 + idx * 0.07}s`,
                  animationFillMode: 'backwards',
                  animation:
                    animState === 'in'
                      ? `fadeInUp 0.5s ease ${0.05 + idx * 0.07}s both`
                      : 'none',
                }}
              >
                <span className="text-gold/30 text-[10px] font-mono mr-3 align-middle">
                  {answer.id.toUpperCase()}
                </span>
                {answer.text}
              </button>
            )
          })}
        </div>

        {/* Microcopy */}
        <p
          className="mt-10 text-white/20 text-[11px] tracking-widest text-center font-raleway"
          style={{
            opacity: animState === 'out' ? 0 : 1,
            transition: 'opacity 0.28s ease',
          }}
        >
          {microcopy}
        </p>
      </div>
    </div>
  )
}

function LoadingScreen({ text }: { text: string }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-mystic-dark"
      style={{ animation: 'fadeIn 0.5s ease forwards' }}
    >
      <div className="text-center space-y-8">
        {/* Mystical orb */}
        <div className="w-28 h-28 mx-auto relative">
          <div
            className="absolute inset-0 rounded-full border border-gold/20"
            style={{ animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite' }}
          />
          <div
            className="absolute inset-[6px] rounded-full border border-gold/30"
            style={{ animation: 'ping 2s cubic-bezier(0,0,0.2,1) 0.3s infinite' }}
          />
          <div
            className="absolute inset-[14px] rounded-full border border-gold/40"
            style={{ animation: 'ping 2s cubic-bezier(0,0,0.2,1) 0.6s infinite' }}
          />
          <div className="absolute inset-[22px] rounded-full bg-gradient-radial from-gold/30 to-transparent" />
          <div
            className="absolute inset-[26px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(201,168,76,0.6) 0%, rgba(201,168,76,0.1) 100%)',
              animation: 'pulseGold 1.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            className="text-gold text-base font-cinzel tracking-[0.15em]"
            key={text}
            style={{ animation: 'fadeIn 0.4s ease forwards' }}
          >
            {text}
          </p>
          <p className="text-white/25 text-xs mt-3 font-raleway tracking-wider">
            Esto tomará solo un momento
          </p>
        </div>
      </div>
    </div>
  )
}
