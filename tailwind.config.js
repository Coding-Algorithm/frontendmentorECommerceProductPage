/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{tsx,ts}", "./Components/*.{tsx,ts}"],
  theme: {
    screens: {
      sm: { 'max': "640px" },
      md: { 'max': "768px" },
      lg: { 'max': "1024px" },
      xlg: { 'max': "1280px" },
      "2xl": { 'max': "1536px" },
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
        black: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
