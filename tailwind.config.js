/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1A74D6',
        darkmain: '#125296',
        light: '#dbe4f1',
      },
  },
  plugins: [],
  } 
}
