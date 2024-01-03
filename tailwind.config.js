/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.{html,js,scss}"],
  theme: {
    plugins: [],
    prefix: "tw-",
    important: true,
    // extends
    extend: {
      screens: {},

      padding: {
        sectionPadding: "55px",
        sectionPaddingMOB: "75px",
        sectionPaddingTAB: "75px",
      },

      margin: {
        sectionmargin: "75px",
      },

      dropShadow: {
        primary_shadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
        secondary_shadow: "10px 10px 25px 0px rgba(0, 0, 0, 0.10)",
      },

      colors: {
        primary_clr: "#007A7F",
        secondary_clr: "#444444",
        tertiary_clr: "#3A3947",
        quartary_clr: "#9A9A9A",
        // bg colors
        primary_BG_clr: "#F0ECE7",
        secondary_BG_clr: "#F5F4F4",
        tertiary_BG_clr: "#FFA800",
        quartary_BG_clr: "#B87A02",
        senary_BG_clr: "#D2AF6F",
        septenary_BG_clr: "#5B5B5B",

        // border colors
        primary_border_clr: "#D9D9D9",
        secondary_border_clr: "#E1E1E1",
        teritary_border_clr: "#DFDFDF",

        // borderClrs
      },

      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1240px",
        },
      },
      // font fontFamily start
      fontFamily: {
        // centabel: ["centabel", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
