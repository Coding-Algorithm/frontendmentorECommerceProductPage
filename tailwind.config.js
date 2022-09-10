/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{tsx,ts}", "./Components/*.{tsx,ts}"],
  theme: {
    screens: {
      sm: {"max": "480px"},
      md: {"max": "768px"},
      lg: {"max": "976px"},
      xlg: {"max": "1440px"},
    },
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleorange: "hsl(25, 100%, 94%)",
        verydarkblue: "hsl(220, 13%, 13%)",
        darkgrayishblue: "hsl(219, 9%, 45%)",
        grayishblue: "hsl(220, 14%, 75%)",
        lightgrayishblue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)"
      }
    },
  },
  plugins: [],
};
