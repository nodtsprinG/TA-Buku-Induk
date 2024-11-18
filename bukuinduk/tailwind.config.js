/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Quicksand: ['Quicksand']
      },
      colors: {
        'background-frame': 'rgba(245, 245, 245, 1);',
        'background-header': 'rgba(140, 209, 250, 0.75);',
        'next': 'rgba(34, 100, 229, 1);',
        'back': 'rgba(132, 155, 176, 1);',
        'delete': 'rgba(255, 13, 13, 1);',
        'subcontent': 'rgba(140, 209, 250, 0.35);',
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

