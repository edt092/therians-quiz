import type { AnimalKey } from './animals'

export interface Answer {
  id: string
  text: string
  scores: Partial<Record<AnimalKey, number>>
}

export interface Question {
  id: number
  text: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'Cuando nadie te está mirando, tú…',
    answers: [
      { id: 'a', text: 'Observas y analizas todo en silencio', scores: { lobo: 3, aguila: 1 } },
      { id: 'b', text: 'Planeas tu próximo movimiento', scores: { zorro: 3, lobo: 1 } },
      { id: 'c', text: 'Existes en tu propio mundo sin pedir permiso', scores: { gato: 3, tigre: 1 } },
      { id: 'd', text: 'Imaginas futuros que aún no existen', scores: { aguila: 3, ciervo: 1 } },
    ],
  },
  {
    id: 2,
    text: 'Tu mayor fortaleza es…',
    answers: [
      { id: 'a', text: 'Saber esperar exactamente el momento correcto', scores: { lobo: 3, zorro: 1 } },
      { id: 'b', text: 'Leer personas mejor que ellas mismas', scores: { zorro: 3, ciervo: 1 } },
      { id: 'c', text: 'No necesitar a nadie para estar completo/a', scores: { gato: 3, tigre: 1 } },
      { id: 'd', text: 'Ver lo que todos ignoran', scores: { aguila: 3, lobo: 1 } },
    ],
  },
  {
    id: 3,
    text: 'Cuando alguien te falla…',
    answers: [
      { id: 'a', text: 'Lo registras en silencio y sigues adelante', scores: { lobo: 3, gato: 1 } },
      { id: 'b', text: 'Ya lo habías visto venir desde el inicio', scores: { zorro: 3, lobo: 1 } },
      { id: 'c', text: 'Te alejas sin drama. Solo desapareces', scores: { gato: 3, tigre: 1 } },
      { id: 'd', text: 'Sientes el dolor profundamente pero perdonas', scores: { ciervo: 3, aguila: 1 } },
    ],
  },
  {
    id: 4,
    text: 'En un grupo, eres el/la que…',
    answers: [
      { id: 'a', text: 'Observa todo y sabe exactamente qué está pasando', scores: { lobo: 3, zorro: 1 } },
      { id: 'b', text: 'Cambia el juego cuando nadie lo espera', scores: { zorro: 3, tigre: 1 } },
      { id: 'c', text: 'Puede estar sin estar. Presente pero libre', scores: { gato: 3, lobo: 1 } },
      { id: 'd', text: 'Ya vio el problema antes de que existiera', scores: { aguila: 3, lobo: 1 } },
    ],
  },
  {
    id: 5,
    text: 'Tu relación con el poder es…',
    answers: [
      { id: 'a', text: 'Lo construyes lento, sin que nadie lo note', scores: { lobo: 3, zorro: 1 } },
      { id: 'b', text: 'Lo usas estratégicamente, no para impresionar', scores: { zorro: 3, aguila: 1 } },
      { id: 'c', text: 'No lo necesitas. El poder es para los inseguros', scores: { gato: 3, tigre: 1 } },
      { id: 'd', text: 'Cuando llega el momento, simplemente lo tomas', scores: { tigre: 3, lobo: 1 } },
    ],
  },
  {
    id: 6,
    text: 'Tu mayor miedo secreto es…',
    answers: [
      { id: 'a', text: 'Perder el control de la situación', scores: { lobo: 2, tigre: 2 } },
      { id: 'b', text: 'Ser completamente predecible', scores: { zorro: 3, gato: 1 } },
      { id: 'c', text: 'Depender emocionalmente de alguien', scores: { gato: 3, lobo: 1 } },
      { id: 'd', text: 'No dejar una huella que importe', scores: { aguila: 3, ciervo: 1 } },
    ],
  },
  {
    id: 7,
    text: 'Cuando tomas una decisión importante…',
    answers: [
      { id: 'a', text: 'Calculas cada variable antes de moverte', scores: { lobo: 3, zorro: 1 } },
      { id: 'b', text: 'Tu instinto manda. La lógica viene después', scores: { tigre: 3, lobo: 1 } },
      { id: 'c', text: 'Escuchas a todos pero decides solo/a', scores: { gato: 3, aguila: 1 } },
      { id: 'd', text: 'Sientes si está alineado con algo más grande', scores: { aguila: 3, ciervo: 1 } },
    ],
  },
  {
    id: 8,
    text: 'Para ti, la soledad es…',
    answers: [
      { id: 'a', text: 'Tu mejor ambiente para pensar con claridad', scores: { lobo: 2, gato: 2 } },
      { id: 'b', text: 'Donde te recargas antes de volver al mundo', scores: { zorro: 3, tigre: 1 } },
      { id: 'c', text: 'Tu estado natural. No es soledad, es libertad', scores: { gato: 3, lobo: 1 } },
      { id: 'd', text: 'Algo que necesitas pero también te duele', scores: { ciervo: 3, aguila: 1 } },
    ],
  },
  {
    id: 9,
    text: 'Las personas te describen como…',
    answers: [
      { id: 'a', text: 'Intenso/a, difícil de leer', scores: { lobo: 3, gato: 1 } },
      { id: 'b', text: 'Inteligente, siempre un paso adelante', scores: { zorro: 3, aguila: 1 } },
      { id: 'c', text: 'Independiente, libre, imprevisible', scores: { gato: 3, tigre: 1 } },
      { id: 'd', text: 'Visionario/a, diferente a todos', scores: { aguila: 3, lobo: 1 } },
    ],
  },
  {
    id: 10,
    text: 'Ante el peligro, tu primer instinto es…',
    answers: [
      { id: 'a', text: 'Evaluar en silencio y esperar el momento exacto', scores: { lobo: 3, zorro: 1 } },
      { id: 'b', text: 'Actuar primero. Pensar después', scores: { tigre: 3, lobo: 1 } },
      { id: 'c', text: 'Retirarte y reevaluar desde otro ángulo', scores: { gato: 3, zorro: 1 } },
      { id: 'd', text: 'Ver el panorama completo antes de moverte', scores: { aguila: 3, lobo: 1 } },
    ],
  },
  {
    id: 11,
    text: 'Lo que más valoras en otra persona…',
    answers: [
      { id: 'a', text: 'Lealtad absoluta. Sin condiciones', scores: { lobo: 3, ciervo: 1 } },
      { id: 'b', text: 'Inteligencia emocional real', scores: { zorro: 2, ciervo: 2 } },
      { id: 'c', text: 'Que respeten tu espacio sin preguntar', scores: { gato: 3, lobo: 1 } },
      { id: 'd', text: 'Honestidad brutal, aunque duela', scores: { tigre: 2, aguila: 2 } },
    ],
  },
  {
    id: 12,
    text: 'Cuando logras algo importante…',
    answers: [
      { id: 'a', text: 'Ya estás pensando en la siguiente meta', scores: { lobo: 2, aguila: 2 } },
      { id: 'b', text: 'Lo celebras un momento y luego desapareces', scores: { zorro: 3, gato: 1 } },
      { id: 'c', text: 'Lo haces en silencio. No necesitas validación', scores: { gato: 3, lobo: 1 } },
      { id: 'd', text: 'Lo compartes. La alegría crece al darse', scores: { ciervo: 3, aguila: 1 } },
    ],
  },
  {
    id: 13,
    text: 'Tu relación con las reglas es…',
    answers: [
      { id: 'a', text: 'Las estudias para saber exactamente cuándo romperlas', scores: { zorro: 3, lobo: 1 } },
      { id: 'b', text: 'Las ignoras si no tienen sentido para ti', scores: { gato: 3, tigre: 1 } },
      { id: 'c', text: 'Las ves como límites de alguien más limitado', scores: { aguila: 3, lobo: 1 } },
      { id: 'd', text: 'Las aceptas si son justas, las cuestionas si no', scores: { ciervo: 2, lobo: 2 } },
    ],
  },
  {
    id: 14,
    text: 'En el amor, tú…',
    answers: [
      { id: 'a', text: 'Eres leal al límite, pero nunca te disculpas por ser quien eres', scores: { lobo: 3, tigre: 1 } },
      { id: 'b', text: 'Sabes lo que la otra persona necesita antes de que lo diga', scores: { zorro: 3, ciervo: 1 } },
      { id: 'c', text: 'Amas en tus propios términos o no amas', scores: { gato: 3, tigre: 1 } },
      { id: 'd', text: 'Das todo. A veces más de lo que deberías', scores: { ciervo: 3, lobo: 1 } },
    ],
  },
  {
    id: 15,
    text: 'Si fueras un momento del día…',
    answers: [
      { id: 'a', text: 'Las 3am. Cuando todo duerme y tú ves con claridad', scores: { lobo: 3, gato: 1 } },
      { id: 'b', text: 'El amanecer. Antes de que el mundo despierte', scores: { zorro: 3, aguila: 1 } },
      { id: 'c', text: 'La hora dorada. Libre, sin destino, sin prisa', scores: { gato: 3, zorro: 1 } },
      { id: 'd', text: 'La tormenta justo antes de que todo aclare', scores: { tigre: 3, lobo: 1 } },
    ],
  },
]
