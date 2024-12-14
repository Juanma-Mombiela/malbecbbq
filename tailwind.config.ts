/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Archivos de tu proyecto
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#1B4869',
      second: '#A7292F',
      white: '#ffffff',
      neutral: '#565584',
    },
    extend: {
      fontFamily: {
        nourd: ['Nourd', 'sans-serif'],
        lucidity_condensed: ['lucidity_condensed', 'sans-serif'],
      },
      fontWeight: {
        medium: '400',
        semibold: '600',
      },
    },
  },
  plugins: [],
};
