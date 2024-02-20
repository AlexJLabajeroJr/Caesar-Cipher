/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1530px',
    },
    extend: {
      // fontFamily: {
      //   cursive: ["cursive", "sans"],
      // },
    },
  },
  plugins: [],
};
