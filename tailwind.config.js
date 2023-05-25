
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blanc': 'rgba(235, 235, 242, 1)',
        'gris': 'rgba(55, 58, 64, 1)',
        'mauveClair': 'rgba(189, 202, 242, 1)'
      },
    },
    screens: {
      '900': '900px',
    },
  },
  plugins: [],
}