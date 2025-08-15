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
        'brand-deep-green': '#283618',
        'brand-light-green': '#606c38',
        'brand-cream': '#fefae0',
        'brand-tan': '#dda15e',
        'brand-brown': '#bc6c25',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
