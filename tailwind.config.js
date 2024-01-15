/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["jost"],
      },
      colors: {
        'navbar': "#010851",
        'hero': "#EBEBEB",
        'card': "#010851",
        'getstart': "#9A7AF1",
      },
    },
  },
  plugins: [],
};
