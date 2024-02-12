import { LazyResult } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C6FCC",
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
