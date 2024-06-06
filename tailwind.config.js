/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      radius: {
        threeRadius: '24rem',
      },
    },
  },
  plugins: [],
}