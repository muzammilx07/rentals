import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

/** @type {import('postcss').Config} */
export default {
  plugins: [tailwindcss(), autoprefixer()],
};
