import QuizFlow from '@/components/QuizFlow'
import { getLocale } from '@/lib/locale'

export async function generateMetadata() {
  const locale = await getLocale()
  return locale === 'en'
    ? { title: 'The Test — Secret Animal', description: 'Answer 15 questions and discover what animal lives within you.' }
    : { title: 'El Test — Animal Secreto', description: 'Responde 15 preguntas y descubre qué animal vive dentro de ti.' }
}

export default async function QuizPage() {
  const locale = await getLocale()
  return <QuizFlow locale={locale} />
}
