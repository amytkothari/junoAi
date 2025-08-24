/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c0c0ff',
          300: '#a0a0ff',
          400: '#9090ff',
          500: '#8077f0',
          600: '#7066d9',
          700: '#6055c2',
          800: '#5044ab',
          900: '#403394',
        },
      },
    },
  },
  plugins: [],
}