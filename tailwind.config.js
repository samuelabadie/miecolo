/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],

  theme: {
    extend: {
      colors: {
        'green' : '#32583D',
        'yellow': '#F8D769',
        'white': '#FAF3E6',
      },

      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '50px',
        'md': '0.375rem',
        'lg': '2.50rem',
        'full': '9999px',
        'large': '12px',
      },
    },
  },
  plugins: [],
}
