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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'punk-black': '#000000',
        'punk-deep': '#1a1a1a',
        'punk-neon': '#00ff41',
        'punk-peach': '#ffb366',
        'punk-orange': '#ffa500',
        'punk-cyan': '#00fff9',
        'punk-pink': '#ff00c8',
      },
      boxShadow: {
        'punk-glow': '0 0 20px rgba(255, 179, 102, 0.5)',
        'punk-neon-glow': '0 0 15px rgba(0, 255, 65, 0.6)',
      },
      animation: {
        'glitch-1': 'glitchTop 0.7s infinite linear alternate-reverse',
        'glitch-2': 'glitchBottom 0.7s infinite linear alternate-reverse',
      },
    },
  },
  plugins: [],
}