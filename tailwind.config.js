/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
  fontFamily: {
    punk: ['punkf', 'sans-serif'],
    sans: ['Inter', 'sans-serif'], // or whatever readable font you're using
  },
},
  },
  plugins: [],
}
