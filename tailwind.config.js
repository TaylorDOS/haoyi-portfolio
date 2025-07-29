/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors");
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, -100px) scale(1.2)' },
          '66%': { transform: 'translate(-30px, 50px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
    colors: {
      ...colors,
      primary: colors.cyan,
      secondary: colors.blue,
    },
    fontFamily: {
      sfprobold: ["var(--font-sfprobold)"],
      playfair: ['var(--font-playfair)'],
    },
  },
  plugins: [],
};
