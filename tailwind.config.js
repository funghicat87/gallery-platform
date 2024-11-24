/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#4076B2',
        darkmain: '#396392',
        light: '#dbe4f1',
      },
  },
  plugins: [],
  } 
}
