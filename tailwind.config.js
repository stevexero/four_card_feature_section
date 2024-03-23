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
        "card-heading": "1.25em",
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
        25: "1.5625em",
        23: "1.4375em",
      },
      letterSpacing: {
        base: 1.5,
        heading: "0.106em",
        "heading-lg": "0.0156em",
        "heading-card": 0,
        body: "0.00625em",
        "body-card": "0.0056em",
      },
    },
  },
  plugins: [],
};
