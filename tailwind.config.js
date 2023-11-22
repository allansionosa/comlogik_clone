/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: "RGB(187, 226, 250)"
      }
    },
  },
  plugins: [],
}
