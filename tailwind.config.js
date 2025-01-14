/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c1d25',   
        secondary: '#F5f5f5', 
        neutral1: '#A6A6A6',    
        neutral2: '#3D3D3D',   
      },
      fontFamily: {
        firaCode: ['firaCode', 'sans-serif'],
        openSans: ['openSans', 'sans-serif'],
        roman: ['roman', 'sans-serif'],
      },
    },
  },
  plugins: [],
}