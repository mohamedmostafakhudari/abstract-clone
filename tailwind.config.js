/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#4C5FD5",
      neutral: "#dadbf1",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontSize: {
        base: "20px",
      },
      fontFamily: {
        head: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      screens: {
        sm: "501px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
