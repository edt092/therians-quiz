import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c96b',
          dark: '#9a7a2e',
        },
        mystic: {
          dark: '#030309',
          mid: '#0d0d1a',
          card: '#0f0f20',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.55s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'fade-out': 'fadeOut 0.3s ease forwards',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'float': 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        'slide-right': 'slideRight 0.5s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        pulseGold: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(201,168,76,0.15), 0 0 60px rgba(201,168,76,0.04)',
          },
          '50%': {
            boxShadow: '0 0 35px rgba(201,168,76,0.35), 0 0 80px rgba(201,168,76,0.12)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(28px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
