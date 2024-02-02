/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora-regular': 'var(--font-lora-regular)',
        'lora-cyrillic': 'var(--font-lora-cyrillic)',
      },
      colors: {
        darkGreen: '#1F554E',
        brightOrange: '#FF715B',
        yellowishGray: '#FDFAF2',
        whiteGray: '#FEFDFB',
        lightOrange: '#F1BF98',
      },
    },
  },
  plugins: [],
};
