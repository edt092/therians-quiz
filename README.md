# Therian Essentia — ¿Cuál es tu animal secreto?

Quiz místico que revela el animal interior del usuario a través de 15 preguntas de personalidad. Cada respuesta tiene pesos por animal; el resultado final se calcula por dominancia relativa y se muestra en una página estática con metadatos únicos y botones de compartir.

## Stack

- **Next.js 14** (App Router, SSG, TypeScript)
- **React 18** + **Tailwind CSS 3.4**
- **Fuentes:** Cinzel (display) + Raleway (cuerpo) via `next/font/google`
- Sin backend, sin auth, sin librerías de UI externas

## Estructura del proyecto

```
app/
  globals.css                    — Variables CSS, keyframes, clases utilitarias
  layout.tsx                     — Layout raíz, carga de fuentes, metadata global
  page.tsx                       — Landing page
  not-found.tsx                  — Página 404
  quiz/page.tsx                  — Wrapper del quiz (renderiza <QuizFlow />)
  resultado/[animal]/page.tsx    — Página de resultado (SSG, generateMetadata)
components/
  QuizFlow.tsx                   — Cliente: máquina de estados del quiz
  ProgressBar.tsx                — Barra de progreso fija (dorada)
  ShareButtons.tsx               — Botones de compartir: X, WhatsApp, copiar link
lib/
  animals.ts                     — 6 animales (AnimalKey, copy, SEO, colores de glow)
  questions.ts                   — 15 preguntas con respuestas ponderadas
  scoring.ts                     — calculateResult(): puntajes → { animal, percentage, scores }
```

## Animales disponibles

`lobo` · `aguila` · `zorro` · `dragon` · `gato` · `oso`

## Cómo funciona el quiz

1. Usuario llega a `/` y hace clic en "Descubrir mi animal"
2. Se renderizan las 15 preguntas — seleccionar una respuesta **auto-avanza** (sin botón Next)
3. Al terminar: 2.2s de animación de carga
4. Redirect a `/resultado/[animal]?pct=XX`
5. Página de resultado con glow personalizado por animal + share buttons

## Scoring

El sistema usa **dominancia relativa sobre baseline uniforme**:
- Se suma el peso de cada respuesta por animal
- Se compara contra el puntaje que tendría una distribución uniforme
- El ratio se mapea al rango 65–96% para el porcentaje mostrado

## Setup local

```bash
cd E:/coding/proyectos-personales/activos/THERIAN-ESSENTIA
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

Conectar el repo a [Vercel](https://vercel.com) — auto-deploy en cada push a `main`.

```bash
npm run build   # verificar build antes de hacer push
```

## Diseño

- Fondo oscuro: `#030309`
- Acento dorado: `#c9a84c`
- Cada animal tiene su propio color de glow definido en `lib/animals.ts`
- Estética mística/oscura — sin componentes genéricos de UI
