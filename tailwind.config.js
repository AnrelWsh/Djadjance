/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris': 'rgba(55, 58, 64, 1)',
        'mauveClair': 'rgba(189, 202, 242, 1)'
      },
    },
  },
  plugins: [],
}