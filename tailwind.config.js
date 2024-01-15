/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': 'Roboto,sans-serif',
      'poppines': 'Poppins,sans-serif',
    },
    extend: {
      backgroundSize: {
        'size': '100% 100%'
      },
      backgroundColor: {
        'story': 'linear-gradient(270deg, #8C939B 0%, #243040 100%)'
      },
      screens: {
        'mysm': '375px'
      }
    },
  },
  plugins: [],
}

