import type { Locale } from './locale'
import type { AnimalKey } from './animals'

export type { Locale }

// ─── UI strings ───────────────────────────────────────────────────────────────

export const ui: Record<
  Locale,
  {
    landing: {
      label: string
      title1: string
      title2: string
      subtitle: string
      body: string
      cta: string
      meta: string
    }
    quiz: {
      microcopy: string[]
      loadingTexts: string[]
      questionWord: string
      ofWord: string
      moment: string
    }
    result: {
      yourTraits: string
      strength: string
      shadow: string
      backHome: string
      retry: string
      shareTitle: string
      copyLink: string
      copied: string
      shareOnX: string
    }
    notFound: {
      title: string
      description: string
      backHome: string
    }
  }
> = {
  es: {
    landing: {
      label: 'Test de Personalidad',
      title1: 'Animal',
      title2: 'Secreto',
      subtitle: 'Descubre tu Instinto Real',
      body: 'Todos llevamos un animal dentro.\nLa pregunta es: ¿tienes el valor de conocerlo?',
      cta: 'Descubrir mi Animal',
      meta: '15 preguntas · 6 animales · 1 verdad',
    },
    quiz: {
      microcopy: [
        'Confía en tu primer instinto…',
        'No hay respuestas correctas, solo verdades…',
        'Siente la respuesta antes de pensarla…',
        'Tu instinto ya sabe quién eres…',
        'Ya casi descubres tu verdadero animal…',
        'El universo está tomando nota…',
      ],
      loadingTexts: [
        'Analizando tu energía…',
        'Leyendo tu instinto…',
        'Consultando el universo…',
        'Revelando tu esencia…',
      ],
      questionWord: 'Pregunta',
      ofWord: 'de',
      moment: 'Esto tomará solo un momento',
    },
    result: {
      yourTraits: 'Tus rasgos',
      strength: 'Fortaleza',
      shadow: 'Sombra',
      backHome: 'Volver al inicio',
      retry: 'Volver a hacer el test',
      shareTitle: 'Compartir resultado',
      copyLink: 'Copiar link',
      copied: 'Copiado',
      shareOnX: 'Compartir en X',
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'Este animal no existe… o ya desapareció.',
      backHome: 'Volver al inicio',
    },
  },
  en: {
    landing: {
      label: 'Personality Test',
      title1: 'Secret',
      title2: 'Animal',
      subtitle: 'Discover Your True Instinct',
      body: "We all carry an animal within.\nThe question is: do you have the courage to know it?",
      cta: 'Discover My Animal',
      meta: '15 questions · 6 animals · 1 truth',
    },
    quiz: {
      microcopy: [
        'Trust your first instinct…',
        'There are no right answers, only truths…',
        'Feel the answer before thinking it…',
        'Your instinct already knows who you are…',
        'Almost time to discover your true animal…',
        'The universe is taking note…',
      ],
      loadingTexts: [
        'Analyzing your energy…',
        'Reading your instinct…',
        'Consulting the universe…',
        'Revealing your essence…',
      ],
      questionWord: 'Question',
      ofWord: 'of',
      moment: 'This will only take a moment',
    },
    result: {
      yourTraits: 'Your traits',
      strength: 'Strength',
      shadow: 'Shadow',
      backHome: 'Back to home',
      retry: 'Take the test again',
      shareTitle: 'Share result',
      copyLink: 'Copy link',
      copied: 'Copied',
      shareOnX: 'Share on X',
    },
    notFound: {
      title: 'Page not found',
      description: "This animal doesn't exist… or has already disappeared.",
      backHome: 'Back to home',
    },
  },
}

// ─── Question text (display only — scores stay in lib/questions.ts) ──────────

export const questionText: Record<
  Locale,
  { text: string; answers: { id: string; text: string }[] }[]
> = {
  es: [
    {
      text: 'Cuando nadie te está mirando, tú…',
      answers: [
        { id: 'a', text: 'Observas y analizas todo en silencio' },
        { id: 'b', text: 'Planeas tu próximo movimiento' },
        { id: 'c', text: 'Existes en tu propio mundo sin pedir permiso' },
        { id: 'd', text: 'Imaginas futuros que aún no existen' },
      ],
    },
    {
      text: 'Tu mayor fortaleza es…',
      answers: [
        { id: 'a', text: 'Saber esperar exactamente el momento correcto' },
        { id: 'b', text: 'Leer personas mejor que ellas mismas' },
        { id: 'c', text: 'No necesitar a nadie para estar completo/a' },
        { id: 'd', text: 'Ver lo que todos ignoran' },
      ],
    },
    {
      text: 'Cuando alguien te falla…',
      answers: [
        { id: 'a', text: 'Lo registras en silencio y sigues adelante' },
        { id: 'b', text: 'Ya lo habías visto venir desde el inicio' },
        { id: 'c', text: 'Te alejas sin drama. Solo desapareces' },
        { id: 'd', text: 'Sientes el dolor profundamente pero perdonas' },
      ],
    },
    {
      text: 'En un grupo, eres el/la que…',
      answers: [
        { id: 'a', text: 'Observa todo y sabe exactamente qué está pasando' },
        { id: 'b', text: 'Cambia el juego cuando nadie lo espera' },
        { id: 'c', text: 'Puede estar sin estar. Presente pero libre' },
        { id: 'd', text: 'Ya vio el problema antes de que existiera' },
      ],
    },
    {
      text: 'Tu relación con el poder es…',
      answers: [
        { id: 'a', text: 'Lo construyes lento, sin que nadie lo note' },
        { id: 'b', text: 'Lo usas estratégicamente, no para impresionar' },
        { id: 'c', text: 'No lo necesitas. El poder es para los inseguros' },
        { id: 'd', text: 'Cuando llega el momento, simplemente lo tomas' },
      ],
    },
    {
      text: 'Tu mayor miedo secreto es…',
      answers: [
        { id: 'a', text: 'Perder el control de la situación' },
        { id: 'b', text: 'Ser completamente predecible' },
        { id: 'c', text: 'Depender emocionalmente de alguien' },
        { id: 'd', text: 'No dejar una huella que importe' },
      ],
    },
    {
      text: 'Cuando tomas una decisión importante…',
      answers: [
        { id: 'a', text: 'Calculas cada variable antes de moverte' },
        { id: 'b', text: 'Tu instinto manda. La lógica viene después' },
        { id: 'c', text: 'Escuchas a todos pero decides solo/a' },
        { id: 'd', text: 'Sientes si está alineado con algo más grande' },
      ],
    },
    {
      text: 'Para ti, la soledad es…',
      answers: [
        { id: 'a', text: 'Tu mejor ambiente para pensar con claridad' },
        { id: 'b', text: 'Donde te recargas antes de volver al mundo' },
        { id: 'c', text: 'Tu estado natural. No es soledad, es libertad' },
        { id: 'd', text: 'Algo que necesitas pero también te duele' },
      ],
    },
    {
      text: 'Las personas te describen como…',
      answers: [
        { id: 'a', text: 'Intenso/a, difícil de leer' },
        { id: 'b', text: 'Inteligente, siempre un paso adelante' },
        { id: 'c', text: 'Independiente, libre, imprevisible' },
        { id: 'd', text: 'Visionario/a, diferente a todos' },
      ],
    },
    {
      text: 'Ante el peligro, tu primer instinto es…',
      answers: [
        { id: 'a', text: 'Evaluar en silencio y esperar el momento exacto' },
        { id: 'b', text: 'Actuar primero. Pensar después' },
        { id: 'c', text: 'Retirarte y reevaluar desde otro ángulo' },
        { id: 'd', text: 'Ver el panorama completo antes de moverte' },
      ],
    },
    {
      text: 'Lo que más valoras en otra persona…',
      answers: [
        { id: 'a', text: 'Lealtad absoluta. Sin condiciones' },
        { id: 'b', text: 'Inteligencia emocional real' },
        { id: 'c', text: 'Que respeten tu espacio sin preguntar' },
        { id: 'd', text: 'Honestidad brutal, aunque duela' },
      ],
    },
    {
      text: 'Cuando logras algo importante…',
      answers: [
        { id: 'a', text: 'Ya estás pensando en la siguiente meta' },
        { id: 'b', text: 'Lo celebras un momento y luego desapareces' },
        { id: 'c', text: 'Lo haces en silencio. No necesitas validación' },
        { id: 'd', text: 'Lo compartes. La alegría crece al darse' },
      ],
    },
    {
      text: 'Tu relación con las reglas es…',
      answers: [
        { id: 'a', text: 'Las estudias para saber exactamente cuándo romperlas' },
        { id: 'b', text: 'Las ignoras si no tienen sentido para ti' },
        { id: 'c', text: 'Las ves como límites de alguien más limitado' },
        { id: 'd', text: 'Las aceptas si son justas, las cuestionas si no' },
      ],
    },
    {
      text: 'En el amor, tú…',
      answers: [
        { id: 'a', text: 'Eres leal al límite, pero nunca te disculpas por ser quien eres' },
        { id: 'b', text: 'Sabes lo que la otra persona necesita antes de que lo diga' },
        { id: 'c', text: 'Amas en tus propios términos o no amas' },
        { id: 'd', text: 'Das todo. A veces más de lo que deberías' },
      ],
    },
    {
      text: 'Si fueras un momento del día…',
      answers: [
        { id: 'a', text: 'Las 3am. Cuando todo duerme y tú ves con claridad' },
        { id: 'b', text: 'El amanecer. Antes de que el mundo despierte' },
        { id: 'c', text: 'La hora dorada. Libre, sin destino, sin prisa' },
        { id: 'd', text: 'La tormenta justo antes de que todo aclare' },
      ],
    },
  ],
  en: [
    {
      text: "When no one's watching, you…",
      answers: [
        { id: 'a', text: 'Observe and analyze everything in silence' },
        { id: 'b', text: 'Plan your next move' },
        { id: 'c', text: 'Exist in your own world without asking permission' },
        { id: 'd', text: "Imagine futures that don't exist yet" },
      ],
    },
    {
      text: 'Your greatest strength is…',
      answers: [
        { id: 'a', text: 'Knowing exactly when to wait for the right moment' },
        { id: 'b', text: 'Reading people better than they know themselves' },
        { id: 'c', text: 'Not needing anyone to feel complete' },
        { id: 'd', text: 'Seeing what everyone else ignores' },
      ],
    },
    {
      text: 'When someone lets you down…',
      answers: [
        { id: 'a', text: 'You note it silently and move on' },
        { id: 'b', text: 'You saw it coming from the very start' },
        { id: 'c', text: 'You pull away without drama. You just disappear' },
        { id: 'd', text: 'You feel the pain deeply but you forgive' },
      ],
    },
    {
      text: "In a group, you're the one who…",
      answers: [
        { id: 'a', text: "Watches everything and knows exactly what's happening" },
        { id: 'b', text: 'Changes the game when no one expects it' },
        { id: 'c', text: "Can be there without being there. Present but free" },
        { id: 'd', text: 'Already saw the problem before it existed' },
      ],
    },
    {
      text: 'Your relationship with power is…',
      answers: [
        { id: 'a', text: "You build it slowly, without anyone noticing" },
        { id: 'b', text: 'You use it strategically, not to impress' },
        { id: 'c', text: "You don't need it. Power is for the insecure" },
        { id: 'd', text: 'When the moment comes, you simply take it' },
      ],
    },
    {
      text: 'Your deepest secret fear is…',
      answers: [
        { id: 'a', text: 'Losing control of the situation' },
        { id: 'b', text: 'Being completely predictable' },
        { id: 'c', text: 'Depending emotionally on someone' },
        { id: 'd', text: "Not leaving a mark that matters" },
      ],
    },
    {
      text: 'When you make an important decision…',
      answers: [
        { id: 'a', text: 'You calculate every variable before moving' },
        { id: 'b', text: 'Your instinct leads. Logic comes after' },
        { id: 'c', text: 'You listen to everyone but decide alone' },
        { id: 'd', text: "You feel if it's aligned with something greater" },
      ],
    },
    {
      text: 'For you, solitude is…',
      answers: [
        { id: 'a', text: 'Your best environment to think clearly' },
        { id: 'b', text: 'Where you recharge before returning to the world' },
        { id: 'c', text: "Your natural state. It's not solitude, it's freedom" },
        { id: 'd', text: 'Something you need but that also hurts' },
      ],
    },
    {
      text: 'People describe you as…',
      answers: [
        { id: 'a', text: 'Intense, hard to read' },
        { id: 'b', text: 'Smart, always one step ahead' },
        { id: 'c', text: 'Independent, free, unpredictable' },
        { id: 'd', text: 'Visionary, different from everyone' },
      ],
    },
    {
      text: 'In the face of danger, your first instinct is…',
      answers: [
        { id: 'a', text: 'Evaluate silently and wait for the exact moment' },
        { id: 'b', text: 'Act first. Think later' },
        { id: 'c', text: 'Withdraw and reassess from another angle' },
        { id: 'd', text: 'See the full picture before moving' },
      ],
    },
    {
      text: 'What you value most in another person…',
      answers: [
        { id: 'a', text: 'Absolute loyalty. No conditions' },
        { id: 'b', text: 'Real emotional intelligence' },
        { id: 'c', text: 'That they respect your space without asking' },
        { id: 'd', text: 'Brutal honesty, even if it hurts' },
      ],
    },
    {
      text: 'When you accomplish something important…',
      answers: [
        { id: 'a', text: "You're already thinking about the next goal" },
        { id: 'b', text: 'You celebrate for a moment and then disappear' },
        { id: 'c', text: "You do it quietly. You don't need validation" },
        { id: 'd', text: 'You share it. Joy grows when given' },
      ],
    },
    {
      text: 'Your relationship with rules is…',
      answers: [
        { id: 'a', text: 'You study them to know exactly when to break them' },
        { id: 'b', text: "You ignore them if they don't make sense to you" },
        { id: 'c', text: 'You see them as limits set by limited people' },
        { id: 'd', text: 'You accept them if fair, question them if not' },
      ],
    },
    {
      text: 'In love, you…',
      answers: [
        { id: 'a', text: 'Are loyal to the limit, but never apologize for who you are' },
        { id: 'b', text: 'Know what the other person needs before they say it' },
        { id: 'c', text: 'Love on your own terms or not at all' },
        { id: 'd', text: 'Give everything. Sometimes more than you should' },
      ],
    },
    {
      text: 'If you were a moment of the day…',
      answers: [
        { id: 'a', text: '3am. When everything sleeps and you see clearly' },
        { id: 'b', text: 'Dawn. Before the world wakes up' },
        { id: 'c', text: 'The golden hour. Free, no destination, no rush' },
        { id: 'd', text: 'The storm just before everything clears' },
      ],
    },
  ],
}

// ─── Animal text (visual data stays in lib/animals.ts) ────────────────────────

export const animalText: Record<
  Locale,
  Record<
    AnimalKey,
    {
      name: string
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
  >
> = {
  es: {
    lobo: {
      name: 'Lobo Estratégico',
      identity:
        'Observas en silencio. Esperas en calma. Y cuando actúas, nadie puede detenerte.',
      traits: ['Estratégico', 'Leal', 'Intenso', 'Paciente', 'Calculador'],
      aesthetic: 'La manada no te define. Tú defines a la manada.',
      strength: 'Sabes exactamente cuándo actuar. Tu timing es casi sobrenatural.',
      shadow: 'A veces esperas tanto que la oportunidad pasa sin que lo notes.',
      shareText:
        'Hice el test de Animal Secreto y soy un Lobo Estratégico 🐺 Silencioso, leal, y más peligroso de lo que parece. ¿Tú qué eres?',
      seoTitle: 'Lobo Estratégico — Descubre tu Animal Secreto',
      seoDescription:
        'Eres un Lobo Estratégico. Observas en silencio, planeas en las sombras, y actúas con precisión letal. Descubre tu instinto real en Animal Secreto.',
      seoKeywords:
        'lobo estratégico, animal secreto, test personalidad, quiz instinto, lobo',
    },
    zorro: {
      name: 'Zorro Astuto',
      identity:
        'Siempre tres pasos adelante. Tu mente es el arma más poderosa del juego.',
      traits: ['Astuto', 'Adaptable', 'Carismático', 'Observador', 'Impredecible'],
      aesthetic: 'Nunca muestras todas tus cartas. El misterio es tu poder.',
      strength: 'Lees situaciones y personas mejor que nadie. Ves lo que todos ignoran.',
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
      name: 'Gato Independiente',
      identity: 'No necesitas su aprobación. Tu presencia sola ya es una declaración.',
      traits: ['Independiente', 'Selectivo', 'Misterioso', 'Libre', 'Auténtico'],
      aesthetic: 'Apareces cuando quieres. Desapareces sin aviso. Eso te hace irresistible.',
      strength: 'Tu autosuficiencia es tu mayor poder. No dependes de nadie para brillar.',
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
      name: 'Águila Visionaria',
      identity:
        'Ves lo que nadie más puede ver. Tu perspectiva existe en una frecuencia que pocos alcanzan.',
      traits: ['Visionario', 'Clarividente', 'Libre', 'Determinado', 'Elevado'],
      aesthetic: 'Vuelas solo porque pocas personas están en tu frecuencia.',
      strength:
        'Tu visión a largo plazo te protege de errores que otros cometen sin notarlo.',
      shadow: 'Tan enfocado en el futuro que a veces olvidas vivir el presente.',
      shareText:
        'Hice el test de Animal Secreto y soy un Águila Visionaria 🦅 Veo el futuro antes de que llegue. ¿Tú qué eres?',
      seoTitle: 'Águila Visionaria — Descubre tu Animal Secreto',
      seoDescription:
        'Eres un Águila Visionaria. Clarividente, libre, con una perspectiva que trasciende lo ordinario. Descubre tu instinto real en Animal Secreto.',
      seoKeywords:
        'águila visionaria, animal secreto, test personalidad, quiz instinto, visión',
    },
    ciervo: {
      name: 'Ciervo Empático',
      identity:
        'Tu sensibilidad no es debilidad. Es la forma más poderosa de conectar con el mundo.',
      traits: ['Empático', 'Sensible', 'Leal', 'Intuitivo', 'Protector'],
      aesthetic: 'Sientes el dolor de otros antes de que ellos mismos lo reconozcan.',
      strength:
        'Tu capacidad de conectar genuinamente crea lealtades que duran toda la vida.',
      shadow: 'Absorbes las emociones de todos. A veces no sabes cuáles son las tuyas.',
      shareText:
        'Hice el test de Animal Secreto y soy un Ciervo Empático 🦌 Siento lo que otros no se atreven a decir. ¿Tú qué eres?',
      seoTitle: 'Ciervo Empático — Descubre tu Animal Secreto',
      seoDescription:
        'Eres un Ciervo Empático. Profundamente sensible, leal e intuitivo. Descubre tu instinto real en Animal Secreto.',
      seoKeywords:
        'ciervo empático, animal secreto, test personalidad, quiz instinto, empatía',
    },
    tigre: {
      name: 'Tigre Dominante',
      identity:
        'Naces para dominar. No lo puedes evitar. Y en el fondo, tampoco quieres.',
      traits: ['Dominante', 'Carismático', 'Intenso', 'Instintivo', 'Magnético'],
      aesthetic: 'Entras a una habitación y el ambiente cambia. Así de inevitable eres.',
      strength: 'Cuando decides algo, lo logras. Sin importar los obstáculos. Sin excepciones.',
      shadow: 'Tu intensidad puede abrumar a quienes no están en tu nivel de energía.',
      shareText:
        'Hice el test de Animal Secreto y soy un Tigre Dominante 🐯 Nacido para dominar lo que otros temen. ¿Tú qué eres?',
      seoTitle: 'Tigre Dominante — Descubre tu Animal Secreto',
      seoDescription:
        'Eres un Tigre Dominante. Magnético, intenso, con una presencia que nadie puede ignorar. Descubre tu instinto real en Animal Secreto.',
      seoKeywords:
        'tigre dominante, animal secreto, test personalidad, quiz instinto, liderazgo',
    },
  },
  en: {
    lobo: {
      name: 'Strategic Wolf',
      identity:
        'You observe in silence. You wait calmly. And when you act, no one can stop you.',
      traits: ['Strategic', 'Loyal', 'Intense', 'Patient', 'Calculated'],
      aesthetic: "The pack doesn't define you. You define the pack.",
      strength: 'You know exactly when to act. Your timing is almost supernatural.',
      shadow: 'Sometimes you wait so long that the opportunity passes without you noticing.',
      shareText:
        "I took the Secret Animal test and I'm a Strategic Wolf 🐺 Silent, loyal, and more dangerous than it seems. What are you?",
      seoTitle: 'Strategic Wolf — Discover Your Secret Animal',
      seoDescription:
        'You are a Strategic Wolf. You observe in silence, plan in the shadows, and act with lethal precision. Discover your true instinct on Secret Animal.',
      seoKeywords:
        'strategic wolf, secret animal, personality test, instinct quiz, wolf',
    },
    zorro: {
      name: 'Cunning Fox',
      identity:
        'Always three steps ahead. Your mind is the most powerful weapon in the game.',
      traits: ['Cunning', 'Adaptable', 'Charismatic', 'Observant', 'Unpredictable'],
      aesthetic: "You never show all your cards. Mystery is your power.",
      strength: 'You read situations and people better than anyone. You see what everyone else ignores.',
      shadow: 'Your need for control can make you distrust even those who love you.',
      shareText:
        "I took the Secret Animal test and I'm a Cunning Fox 🦊 Always three steps ahead. What are you?",
      seoTitle: 'Cunning Fox — Discover Your Secret Animal',
      seoDescription:
        'You are a Cunning Fox. Sharp intelligence, total adaptability, and always three steps ahead. Discover your true instinct on Secret Animal.',
      seoKeywords:
        'cunning fox, secret animal, personality test, instinct quiz, intelligence',
    },
    gato: {
      name: 'Independent Cat',
      identity: "You don't need their approval. Your presence alone is a statement.",
      traits: ['Independent', 'Selective', 'Mysterious', 'Free', 'Authentic'],
      aesthetic: 'You appear when you want. You disappear without warning. That makes you irresistible.',
      strength: "Your self-sufficiency is your greatest power. You don't depend on anyone to shine.",
      shadow: 'Your emotional distance can push away those who genuinely want to get close.',
      shareText:
        "I took the Secret Animal test and I'm an Independent Cat 🐈‍⬛ I don't follow rules I didn't write. What are you?",
      seoTitle: 'Independent Cat — Discover Your Secret Animal',
      seoDescription:
        'You are an Independent Cat. Mysterious, free, and completely authentic. Discover your true instinct on Secret Animal.',
      seoKeywords:
        'independent cat, secret animal, personality test, instinct quiz, freedom',
    },
    aguila: {
      name: 'Visionary Eagle',
      identity:
        "You see what no one else can see. Your perspective exists at a frequency few can reach.",
      traits: ['Visionary', 'Clairvoyant', 'Free', 'Determined', 'Elevated'],
      aesthetic: 'You fly alone because few people are on your frequency.',
      strength: 'Your long-term vision protects you from mistakes others make without noticing.',
      shadow: 'So focused on the future that you sometimes forget to live in the present.',
      shareText:
        "I took the Secret Animal test and I'm a Visionary Eagle 🦅 I see the future before it arrives. What are you?",
      seoTitle: 'Visionary Eagle — Discover Your Secret Animal',
      seoDescription:
        'You are a Visionary Eagle. Clairvoyant, free, with a perspective that transcends the ordinary. Discover your true instinct on Secret Animal.',
      seoKeywords:
        'visionary eagle, secret animal, personality test, instinct quiz, vision',
    },
    ciervo: {
      name: 'Empathic Deer',
      identity:
        "Your sensitivity is not weakness. It's the most powerful way to connect with the world.",
      traits: ['Empathic', 'Sensitive', 'Loyal', 'Intuitive', 'Protective'],
      aesthetic: 'You feel the pain of others before they even recognize it themselves.',
      strength: 'Your ability to genuinely connect creates loyalties that last a lifetime.',
      shadow: "You absorb everyone's emotions. Sometimes you don't know which ones are yours.",
      shareText:
        "I took the Secret Animal test and I'm an Empathic Deer 🦌 I feel what others dare not say. What are you?",
      seoTitle: 'Empathic Deer — Discover Your Secret Animal',
      seoDescription:
        'You are an Empathic Deer. Deeply sensitive, loyal, and intuitive. Discover your true instinct on Secret Animal.',
      seoKeywords:
        'empathic deer, secret animal, personality test, instinct quiz, empathy',
    },
    tigre: {
      name: 'Dominant Tiger',
      identity: "Born to dominate. You can't help it. And deep down, you don't want to.",
      traits: ['Dominant', 'Charismatic', 'Intense', 'Instinctive', 'Magnetic'],
      aesthetic: "You enter a room and the atmosphere changes. That's how inevitable you are.",
      strength: 'When you decide something, you achieve it. No matter the obstacles. No exceptions.',
      shadow: "Your intensity can overwhelm those who aren't at your energy level.",
      shareText:
        "I took the Secret Animal test and I'm a Dominant Tiger 🐯 Born to dominate what others fear. What are you?",
      seoTitle: 'Dominant Tiger — Discover Your Secret Animal',
      seoDescription:
        'You are a Dominant Tiger. Magnetic, intense, with a presence no one can ignore. Discover your true instinct on Secret Animal.',
      seoKeywords:
        'dominant tiger, secret animal, personality test, instinct quiz, leadership',
    },
  },
}
