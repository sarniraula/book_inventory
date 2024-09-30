/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        accent: '#F5A623',
        dark: '#333333',
        light: '#F7F7F7',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #4A90E2, #50E3C2)',
        'gradient-accent': 'linear-gradient(45deg, #F5A623, #F7F7F7)',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}