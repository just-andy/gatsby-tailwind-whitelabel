// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      primary: "#ff6699",
      secondary: "#007ace",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    tableLayout: false,
  },
}
