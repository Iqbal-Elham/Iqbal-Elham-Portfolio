/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        blink: { '0%,50%': { opacity: 1 }, '50%,100%': { opacity: 0 } },
        'scroll-left': {
          '0%':  { transform: 'translateX(0)' },
          '100%':{ transform: 'translateX(-50%)' },  // track is doubled
        },
      },
      animation: {
        caret: 'blink 1s step-end infinite',
        fadeText: 'fade 1s ease-in-out infinite',
        'scroll-left': 'scroll-left 40s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class strategy
} 