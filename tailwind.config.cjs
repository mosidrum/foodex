/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        orange: "#d87023",
        green: "#009F79",
      },
      fontFamily: {
        sofia: ["Sofia Sans", "serif"],
        pangram: ["PT Sans Narrow", "serif"],
      },
    },
  },
  plugins: [],
};
