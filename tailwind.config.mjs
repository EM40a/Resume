/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent': '#7de2d1',
        'dark-blue': {
          500: '#071221',
          300: '#32455a',
          100: '#456384'
        },
        'light-blue': {
          500: '#597d9e',
          300: '#a8bdd1',
          100: '#f5f7fa'
        },
      },
      fontFamily: {
        Onest: ['Onest', 'system-ui', 'sans-serif']
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },

          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      },
      animation: {
        neon: "neon 5s linear infinite",
        'bounce-x': 'bounce-x 1s infinite',
      },
    },
  },
  plugins: [],
}
