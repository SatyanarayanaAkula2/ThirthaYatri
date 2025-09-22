/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React files
  ],
  theme: {
    extend: {
        keyframes:{
           fallin:{
              '0%':{
                 transform:"translateZ(600px) scale(2)",
                 opacity:"0", 
              },
              "100%":{
                transform:"translateZ(0) scale(1)",
                opacity:'1',
              },
           },
           enlarge:{
            '0%':{
                transform:"scale(1)",
            },
            '100%':{
                transform:"scale(1.05)",
            }
           },
        },
        animation:{
            fallin:"fallin 1s ease-out forwards",
            enlarge:"enlarge 0.5s ease-out forwards"
        },
    },
  },
  plugins: [],
}