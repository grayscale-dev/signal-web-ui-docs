import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './ui/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#b6cbff',
          300: '#8eabff',
          400: '#6a88ff',
          500: '#4c67ff',
          600: '#3b4fe6',
          700: '#2f3db8',
          800: '#25308c',
          900: '#1f2a6f'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
