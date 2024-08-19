/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        'primary-color':'#1476ff',
        'secondary-color':'#f3f5ff',
        'dark-color':'#333',
        'light-color':'#f9faff',
      },
    },
  },
  plugins: [],
}
