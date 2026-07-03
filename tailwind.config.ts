import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 24px 80px rgba(16, 24, 40, 0.18)',
      },
      colors: {
        wedding: {
          50: '#faf7ff',
          100: '#f4efff',
          200: '#e7d9ff',
          300: '#d6b8ff',
          400: '#c090ff',
          500: '#a45bff',
          600: '#8d39f5',
          700: '#7328c2',
          800: '#5c1f92',
          900: '#4b1c75'
        }
      },
      backgroundImage: {
        'hero-glass': 'radial-gradient(circle at top left, rgba(255,255,255,0.24), transparent 32%), radial-gradient(circle at bottom right, rgba(196,181,253,0.16), transparent 28%)'
      }
    }
  },
  plugins: [],
} satisfies Config;
