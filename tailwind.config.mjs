/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F3EC',
          200: '#EFEBE3',
          300: '#E3DDD3',
        },
        brass: {
          DEFAULT: '#A38A66',
          dark: '#8A7354',
          light: '#C4A87E',
        },
        graphite: {
          DEFAULT: '#2C2A28',
          light: '#4A4744',
          muted: '#6B6864',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
