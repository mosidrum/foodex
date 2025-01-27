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
        pangram: ["PT Serif Caption", "serif"],
      },
      fontSize: {
        tiny: "8px",
        small: "12px",
        base: "14px",
        large: "16px",
        huge: "32px",
        massive: "40px",
      },
    },
  },
  plugins: [],
};
