/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        displayfair: ['"Playfair Display", serif'],
        clickerScript: ['"Clicker Script", serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontSize: {
        "10xl": "220px",
      },
      colors: {
        activeBrown: "#F9C06A",
        light: "#f9c06a0c",
        brown: "#6B4226",
        myGray: "#707070",
      },
    },
  },
  plugins: [],
};
