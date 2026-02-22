/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,ts}','./components/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        background: "#F8F8F8",
        gray: {
          100: "#8F8F8F",
          border: "#D9D9D9"
        }
      },
      borderRadius: {
        '4xl': '2rem',    // 32px
        '5xl': '3rem',    // 48px 
      }
    },
  },
  plugins: ["tw-animate-css"]
}

