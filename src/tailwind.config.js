/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*html"],
  theme: {
    extend: {
      fontFamily:{
        "Bai-Jamjuree":["Bai Jamjuree", "sans-serif"],
    },
    colors:{"Strong-Cyan": ["hsl(171, 66%, 44%)"],
       "Light-Blue": ["hsl(233, 100%, 69%)"],
       "Dark-Grayish-Blue": ["hsl(210, 10%, 33%)"],
       "Grayish-Blue": ["hsl(201, 11%, 66%)"],

    }
  },
  plugins: [],
  }}
