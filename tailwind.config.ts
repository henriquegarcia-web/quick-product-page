import type { Config } from 'tailwindcss'
import lineClamp from '@tailwindcss/line-clamp'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [lineClamp],
}

export default config
