const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lora-regular": "var(--font-lora-regular)",
        "lora-cyrillic": "var(--font-lora-cyrillic)",
        "comfortaa-regular": "var(--font-comfortaa-regular)",
        "inter-regular": "var(--font-inter-regular)",
      },
      colors: {
        darkGreen: "#1F554E",
        darkDarkGreen: "#163b36",
        brightOrange: "#EF3E36",
        yellowishGray: "#FDFAF2",
        whiteGray: "#FEFDFB",
        lightOrange: "#F1BF98",
        maroon: "#3E012F",
        orange: "#FAE5B9",
        pink: "#FEF5ED",

        deepTeal: "#1F554E",
        softSage: "#C0C5B0",
        warmBeige: "#D9B68C",
        lightGray: "#F5F5F5",
        charcoalGray: "#333333",

        primary: "#4A7C59",
        secondary: "#D9B08C",
        accent: "#F28C28",
        backgroundColor: "#FAF8F5",
        textColor: "#2E2E2E",
      },
      screens: {
        xs: "375px",
      },
      animation: {
        spinToLeft: "spinToLeft 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        spinToLeft: {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
