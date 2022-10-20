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
      black: "#000",
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
      animation: {
        appearFromRight: "appearFromRight 1s",
        appearFromLeft: "appearFromLeft 1s",
        appearFromTop: "appearFromTop 0.3s",
        appearFromNothing: "appearFromNothing 1s",
      },
      keyframes: {
        appearFromRight: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        appearFromLeft: {
          "0%": { opacity: 0, transform: "translateX(+50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        appearFromTop: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        appearFromNothing: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
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
