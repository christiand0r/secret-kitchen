/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(0deg, white 0 5%, transparent 20%), url('img/hero-banner.png')",
        "brush-pattern": "url('img/light-brush.png')",
      },
      borderRadius: {
        hg: "0.625rem",
      },
      colors: {
        charleston: "#24272a",
        charcoal: "#3f454a",
        gold: "#d8ad3d",
        firebrick: "#b72c2c",
        carolina: "#009cd9",
      },
      dropShadow: {
        "3xl": "0px 4px 40px rgba(0, 0, 0, 0.07)",
      },
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
        cavet: ["Caveat", "system-ui", "sans-serif"],
      },
      gridTemplateColumns: {
        main: "16.875rem repeat(2, 1fr)",
        card: "repeat(auto-fit, minmax(270px, 1fr))",
      },
      lineHeight: {
        tiny: "0.75",
      },
      maxWidth: {
        tiny: "16.875rem",
        xxl: "45.25rem",
      },
    },
  },
  plugins: [],
};
