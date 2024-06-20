/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "rgb(204, 153, 100)",
      },
      fontFamily: {
        serif: ['PT Serif', 'serif'], // Add this line
      },
    },
  },
  plugins: [],
};
