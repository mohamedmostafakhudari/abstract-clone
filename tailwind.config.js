/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      primary: "#4C5FD5",
      neutral: "#dadbf1",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        head: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      screens: {
        sm: "501px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
