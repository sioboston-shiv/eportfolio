/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        warm: '#f8f4f0',
        'warm-alt': '#f2ede8',
        border: '#e8ddd4',
        accent: '#ea580c',
        'accent-light': '#fff7ed',
        'accent-border': '#fed7aa',
        'accent-dark': '#c2410c',
        dark: '#1c1917',
        mid: '#57534e',
        muted: '#78716c',
        faint: '#a8a29e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
