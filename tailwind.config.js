/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize : {
      "50" : ["50px" , "60px"]
    },
    extend: {
      colors : {
        "myprimary" : "#025595"
      },
      spacing : {
        '7.5' : "30px",
        '18' : "70px"
      }
    },
  },
  plugins: [],
}

