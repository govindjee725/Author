/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#4CAF50',
        primaryBlue: '#2196F3',
        accentCyan: '#00BCD4',
        background: '#f5f5f5',
        text: '#333333',
        mate:'#28282B',
      },
    },
  },
  plugins: [],
}

