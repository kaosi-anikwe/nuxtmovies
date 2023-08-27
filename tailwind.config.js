/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: "#02161D",
        customWhite: "#FFFFFA",
        highlightGreen: "#27be6f",
        customBlue: "#1D8181",
        customLightBlue: "#72D4DF",
      },
    },
  },
  plugins: [],
};
