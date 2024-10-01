/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06BF9D',
        secondary: '#590202',
        accent: '#F2CB05',
        dark: '#333333',
        light: '#F7F7F7',
        danger: '#F22E2E',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #06BF9D, #50E3C2)',
        'gradient-accent': 'linear-gradient(45deg, #F2CB05, #F7F7F7)',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}