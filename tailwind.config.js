/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        main: "#FAFAFA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        large: "2.25em",
        medium: "1.5em",
        small: "0.9375em",
        extrasmall: "0.8125em",
      },
      fontWeight: {
        extralight: 200,
        regular: 400,
        semibold: 600,
      },
      lineHeight: {
        base: 1.5,
        25: "25px",
        23: "23px",
      },
      letterSpacing: {
        base: 0,
        heading: "0.17px",
        "heading-lg": "0.25px",
        body: "0.1px",
        "body-card": "0.09px",
      },
    },
  },
  plugins: [],
};
