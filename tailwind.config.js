import { LazyResult } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C6FCC",
          100: "#3DB178",
          200: "#FFBF00",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
