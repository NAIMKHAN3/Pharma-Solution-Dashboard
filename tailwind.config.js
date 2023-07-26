/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#3a4c70",
      },
      backgroundColor: {
        primary: "#3a4c70",
      },
    },
  },
  plugins: [],
};
