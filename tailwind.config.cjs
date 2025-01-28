/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "custom-bg": "url('./src/assets/bg.png')",
      },
      boxShadow: {
        "footer-card": `
          rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px
        `,
      },
      colors: {
        white: "#ffffff",
        gray: "#858786",
        orange: "#d87023",
        green: "#009F79",
        purple: "#5f63e1",
        light: "#fff8f2",
        contentinental: "#d6d5ca",
        contentinentaltext2: "#49280f",
        contentinentaltext1: "#3c3937",
        cardImagebackground: "#f4f3e8",
        overlay: "#fbf6ef",
        line: "#eeeeee",
        subMenu: "#353542",
        iconbg: "#f7ece4",
      },
      fontFamily: {
        sofia: ["Sofia Sans", "serif"],
        pangram: ["PT Sans", "serif"],
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
