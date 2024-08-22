import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#CCD5AE",
        background2: "#E0E5B6",
        back: "#FAEDCE",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
