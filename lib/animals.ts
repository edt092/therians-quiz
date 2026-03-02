export type AnimalKey = 'lobo' | 'zorro' | 'gato' | 'aguila' | 'ciervo' | 'tigre'

export interface Animal {
  key: AnimalKey
  name: string
  emoji: string
  accentColor: string
  accentColorSecondary: string
  gradientFrom: string
  gradientMid: string
  gradientTo: string
  glowColor: string
  identity: string
  traits: string[]
  aesthetic: string
  strength: string
  shadow: string
  shareText: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
}

export const animals: Record<AnimalKey, Animal> = {
  lobo: {
    key: 'lobo',
    name: 'Lobo Estratégico',
    emoji: '🐺',
    accentColor: '#818cf8',
    accentColorSecondary: '#6366f1',
    gradientFrom: '#030312',
    gradientMid: '#0f0b2e',
    gradientTo: '#1a1650',
    glowColor: 'rgba(99,102,241,0.45)',
    identity:
      'Observas en silencio. Esperas en calma. Y cuando actúas, nadie puede detenerte.',
    traits: ['Estratégico', 'Leal', 'Intenso', 'Paciente', 'Calculador'],
    aesthetic: 'La manada no te define. Tú defines a la manada.',
    strength:
      'Sabes exactamente cuándo actuar. Tu timing es casi sobrenatural.',
    shadow:
      'A veces esperas tanto que la oportunidad pasa sin que lo notes.',
    shareText:
      'Hice el test de Animal Secreto y soy un Lobo Estratégico 🐺 Silencioso, leal, y más peligroso de lo que parece. ¿Tú qué eres?',
    seoTitle: 'Lobo Estratégico — Descubre tu Animal Secreto',
    seoDescription:
      'Eres un Lobo Estratégico. Observas en silencio, planeas en las sombras, y actúas con precisión letal. Descubre tu instinto real en Animal Secreto.',
    seoKeywords:
      'lobo estratégico, animal secreto, test personalidad, quiz instinto, lobo',
  },
  zorro: {
    key: 'zorro',
    name: 'Zorro Astuto',
    emoji: '🦊',
    accentColor: '#fb923c',
    accentColorSecondary: '#f97316',
    gradientFrom: '#0d0500',
    gradientMid: '#2a0e02',
    gradientTo: '#4a1a05',
    glowColor: 'rgba(249,115,22,0.45)',
    identity:
      'Siempre tres pasos adelante. Tu mente es el arma más poderosa del juego.',
    traits: ['Astuto', 'Adaptable', 'Carismático', 'Observador', 'Impredecible'],
    aesthetic: 'Nunca muestras todas tus cartas. El misterio es tu poder.',
    strength:
      'Lees situaciones y personas mejor que nadie. Ves lo que todos ignoran.',
    shadow:
      'Tu necesidad de control puede hacerte desconfiar incluso de quienes te aman.',
    shareText:
      'Hice el test de Animal Secreto y soy un Zorro Astuto 🦊 Siempre tres pasos adelante. ¿Tú qué eres?',
    seoTitle: 'Zorro Astuto — Descubre tu Animal Secreto',
    seoDescription:
      'Eres un Zorro Astuto. Inteligencia aguda, adaptabilidad total, y siempre tres pasos adelante. Descubre tu instinto real en Animal Secreto.',
    seoKeywords:
      'zorro astuto, animal secreto, test personalidad, quiz instinto, inteligencia',
  },
  gato: {
    key: 'gato',
    name: 'Gato Independiente',
    emoji: '🐈‍⬛',
    accentColor: '#c084fc',
    accentColorSecondary: '#a855f7',
    gradientFrom: '#08000f',
    gradientMid: '#150a2e',
    gradientTo: '#1e0a4a',
    glowColor: 'rgba(168,85,247,0.45)',
    identity:
      'No necesitas su aprobación. Tu presencia sola ya es una declaración.',
    traits: ['Independiente', 'Selectivo', 'Misterioso', 'Libre', 'Auténtico'],
    aesthetic: 'Apareces cuando quieres. Desapareces sin aviso. Eso te hace irresistible.',
    strength:
      'Tu autosuficiencia es tu mayor poder. No dependes de nadie para brillar.',
    shadow:
      'Tu distancia emocional puede alejar a quienes genuinamente quieren acercarse.',
    shareText:
      'Hice el test de Animal Secreto y soy un Gato Independiente 🐈‍⬛ No sigo reglas que no escribí yo. ¿Tú qué eres?',
    seoTitle: 'Gato Independiente — Descubre tu Animal Secreto',
    seoDescription:
      'Eres un Gato Independiente. Misterioso, libre, y completamente auténtico. Descubre tu instinto real en Animal Secreto.',
    seoKeywords:
      'gato independiente, animal secreto, test personalidad, quiz instinto, libertad',
  },
  aguila: {
    key: 'aguila',
    name: 'Águila Visionaria',
    emoji: '🦅',
    accentColor: '#38bdf8',
    accentColorSecondary: '#0ea5e9',
    gradientFrom: '#000d12',
    gradientMid: '#031f2e',
    gradientTo: '#053348',
    glowColor: 'rgba(14,165,233,0.45)',
    identity:
      'Ves lo que nadie más puede ver. Tu perspectiva existe en una frecuencia que pocos alcanzan.',
    traits: ['Visionario', 'Clarividente', 'Libre', 'Determinado', 'Elevado'],
    aesthetic: 'Vuelas solo porque pocas personas están en tu frecuencia.',
    strength:
      'Tu visión a largo plazo te protege de errores que otros cometen sin notarlo.',
    shadow:
      'Tan enfocado en el futuro que a veces olvidas vivir el presente.',
    shareText:
      'Hice el test de Animal Secreto y soy un Águila Visionaria 🦅 Veo el futuro antes de que llegue. ¿Tú qué eres?',
    seoTitle: 'Águila Visionaria — Descubre tu Animal Secreto',
    seoDescription:
      'Eres un Águila Visionaria. Clarividente, libre, con una perspectiva que trasciende lo ordinario. Descubre tu instinto real en Animal Secreto.',
    seoKeywords:
      'águila visionaria, animal secreto, test personalidad, quiz instinto, visión',
  },
  ciervo: {
    key: 'ciervo',
    name: 'Ciervo Empático',
    emoji: '🦌',
    accentColor: '#34d399',
    accentColorSecondary: '#10b981',
    gradientFrom: '#000d07',
    gradientMid: '#031a0f',
    gradientTo: '#052e1a',
    glowColor: 'rgba(16,185,129,0.45)',
    identity:
      'Tu sensibilidad no es debilidad. Es la forma más poderosa de conectar con el mundo.',
    traits: ['Empático', 'Sensible', 'Leal', 'Intuitivo', 'Protector'],
    aesthetic: 'Sientes el dolor de otros antes de que ellos mismos lo reconozcan.',
    strength:
      'Tu capacidad de conectar genuinamente crea lealtades que duran toda la vida.',
    shadow:
      'Absorbes las emociones de todos. A veces no sabes cuáles son las tuyas.',
    shareText:
      'Hice el test de Animal Secreto y soy un Ciervo Empático 🦌 Siento lo que otros no se atreven a decir. ¿Tú qué eres?',
    seoTitle: 'Ciervo Empático — Descubre tu Animal Secreto',
    seoDescription:
      'Eres un Ciervo Empático. Profundamente sensible, leal e intuitivo. Descubre tu instinto real en Animal Secreto.',
    seoKeywords:
      'ciervo empático, animal secreto, test personalidad, quiz instinto, empatía',
  },
  tigre: {
    key: 'tigre',
    name: 'Tigre Dominante',
    emoji: '🐯',
    accentColor: '#f87171',
    accentColorSecondary: '#ef4444',
    gradientFrom: '#0f0000',
    gradientMid: '#2a0404',
    gradientTo: '#430a0a',
    glowColor: 'rgba(239,68,68,0.45)',
    identity:
      'Naces para dominar. No lo puedes evitar. Y en el fondo, tampoco quieres.',
    traits: ['Dominante', 'Carismático', 'Intenso', 'Instintivo', 'Magnético'],
    aesthetic: 'Entras a una habitación y el ambiente cambia. Así de inevitable eres.',
    strength:
      'Cuando decides algo, lo logras. Sin importar los obstáculos. Sin excepciones.',
    shadow:
      'Tu intensidad puede abrumar a quienes no están en tu nivel de energía.',
    shareText:
      'Hice el test de Animal Secreto y soy un Tigre Dominante 🐯 Nacido para dominar lo que otros temen. ¿Tú qué eres?',
    seoTitle: 'Tigre Dominante — Descubre tu Animal Secreto',
    seoDescription:
      'Eres un Tigre Dominante. Magnético, intenso, con una presencia que nadie puede ignorar. Descubre tu instinto real en Animal Secreto.',
    seoKeywords:
      'tigre dominante, animal secreto, test personalidad, quiz instinto, liderazgo',
  },
}

export const animalKeys = Object.keys(animals) as AnimalKey[]
