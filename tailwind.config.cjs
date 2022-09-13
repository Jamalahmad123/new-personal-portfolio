module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1340px",
    },
    fontFamily: {
      sans: ["Public Sans", "ui-sans-serif", "system-ui"],
      heading: ["Ibarra Real Nova", "ui-sans-serif"],
    },
    extend: {
      colors: {
        darkGray: "#33323d",
        lightGreen: "#5fb4a2",
        verDarkGreen: "#203a4c",
        darkBorder: "#33323d",
        inputColor: "rgba(51,50,61,.1)",
      },
      maxHeight: {
        view: "80vh",
      },
    },
  },
  plugins: [],
};
