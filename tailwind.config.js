/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,astro}'],
  theme: {
    extend: {},
  },
  plugins: [],



  // tailwind.config.js (se ainda não tiver isso, adicione)
theme: {
  extend: {},
  screens: {
    'xs': '360px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
},

};
