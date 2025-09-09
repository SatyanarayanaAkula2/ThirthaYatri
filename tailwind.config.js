/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React files
  ],
  theme: {
    extend: {
        keyframes:{
           effect1:{
                '0%':{
                    transform:'translateY(0px)'
                },
                '100%':{
                    transform:'translateY(20px)'
                }
           },
        },
        animation:{
            effect1:'effect1 2s ease-in-out forwards'
        },
    },
  },
  plugins: [],
}