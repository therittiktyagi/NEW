import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-deep-blue': '#0A192F',
        'brand-light-blue': '#172A45',
        'brand-gold': '#FFD700',
        'brand-light-slate': '#a8b2d1',
        'brand-slate': '#8892b0',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
