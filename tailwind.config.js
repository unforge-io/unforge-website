/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uf-navy':   '#0A0F1E',
        'uf-teal':   '#1D9E75',
        'uf-border': '#E5E7EB',
        'uf-alt':    '#F7F8FA',
        'uf-body':   '#4B5563',
        'uf-muted':  '#9CA3AF',
      },
      fontFamily: {
        syne:  ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(1.5)' },
        },
        'teal-glow': {
          '0%, 100%': { boxShadow: '0 0 18px rgba(29,158,117,0.25), 0 0 40px rgba(29,158,117,0.10)' },
          '50%':      { boxShadow: '0 0 32px rgba(29,158,117,0.45), 0 0 70px rgba(29,158,117,0.20)' },
        },
      },
      animation: {
        'pulse-dot':  'pulse-dot 1.8s ease-in-out infinite',
        'teal-glow':  'teal-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
