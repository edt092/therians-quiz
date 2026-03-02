import type { AnimalKey } from './animals'
import { questions } from './questions'

export interface ScoreResult {
  animal: AnimalKey
  percentage: number
  scores: Record<AnimalKey, number>
}

export function calculateResult(answers: Record<number, string>): ScoreResult {
  const scores: Record<AnimalKey, number> = {
    lobo: 0,
    zorro: 0,
    gato: 0,
    aguila: 0,
    ciervo: 0,
    tigre: 0,
  }

  questions.forEach((question) => {
    const selectedId = answers[question.id]
    if (!selectedId) return
    const answer = question.answers.find((a) => a.id === selectedId)
    if (!answer) return
    Object.entries(answer.scores).forEach(([animal, pts]) => {
      scores[animal as AnimalKey] += pts
    })
  })

  const entries = Object.entries(scores) as [AnimalKey, number][]
  const sorted = [...entries].sort((a, b) => b[1] - a[1])
  const [winner, second] = sorted

  const total = Object.values(scores).reduce((a, b) => a + b, 0)

  // Normalize to 65–96 range based on dominance over uniform distribution
  const baseline = 1 / 6
  const ratio = total > 0 ? winner[1] / total : baseline
  const normalized = Math.max(0, Math.min(1, (ratio - baseline) / (1 - baseline)))
  const raw = Math.round(65 + normalized * 31)

  // Add a tiny variance so each result feels personal
  const dominance = second ? winner[1] - second[1] : winner[1]
  const micro = dominance % 3 // 0, 1, or 2

  const percentage = Math.min(96, Math.max(65, raw + micro))

  return { animal: winner[0], percentage, scores }
}
