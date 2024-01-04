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

                neon: {
                    '0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%': {
                        textShadow: 'none',
                        color: '#2dffc4',
                    },
                    '18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%': {
                        textShadow:
                            '0 0 10px #2dffc4, 0 0 20px #2dffc4, 0 0 40px #2dffc4, 0 0 80px #2dffc4, 0 0 1600px #2dffc4',
                        color: '#fff',
                    }
                },
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
        backgroundImage: {
            'img-project': "url('/projects/bg-image.webp')",
        },
    },
    plugins: [],
}
