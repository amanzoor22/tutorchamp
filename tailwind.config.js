/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          50: "#fece7d4d",
          100: "#f0be69a1",
          200: "#F7AE32",
          300: "#F59E0B",
          400: "#F7AE32",
          500: "#d4992d",
          600: "#F7AE32",
          700: "#F59E0B",
          800: "#8A5906",
          900: "#8A5906",
          950: "#8A5906",
        },
        secondary: {
          DEFAULT: "#ADD2DE",
          50: "#D9EAF0",
          100: "#CAE2EA",
          200: "#ADD2DE",
          300: "#85BCCE",
          400: "#5DA6BE",
          500: "#418AA2",
          600: "#31687A",
          700: "#214652",
          800: "#11242A",
          900: "#010102",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
