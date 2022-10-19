/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 18,
      sm: 24,
      md: 32,
      lg: 36,
    },
    fontWeight: {
      sm: 400,
      md: 500,
      lg: 700,
    },
    colors: {
      white: "#FFFFFF",
      gray: {
        800: "#342303",
        500: "#2D2D2D",
      },
      blue: {
        800: "#032937",
      },
      orange: {
        200: "#F1A10A",
      },
    },
    extend: {
      fontFamily: {
        sans: "Rubik",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
