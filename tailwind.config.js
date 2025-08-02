/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // <-- THIS LINE IS ESSENTIAL
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}