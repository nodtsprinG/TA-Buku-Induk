/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PTSans: ['PTSans','sans-serif']
      },
      colors: {
        'button': '#4682B4'
      },
      boxShadow: {
        'custom': '5px 8px 8px 4px rgba(0, 0, 0, 0.3)',
        'header': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(171.87% 171.87% at 31.64% 55.75%, rgba(87, 117, 186, 0.64) 0%, rgba(87, 117, 186, 0) 100%)',
        'leftbg': "url('./src/Assets/leftbg.jpg')",
      },
    },
  },
  plugins: [],
}

