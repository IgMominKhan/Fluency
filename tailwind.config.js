/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-primary": "#023059",
        "clr-secondary": "#033E8C",
        "clr-terciary": "#023059",
        "clr-accent": "#079DD9",
        "clr-dark": "#023059",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
