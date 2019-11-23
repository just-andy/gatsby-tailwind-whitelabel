// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      'primary': "#38C172",
      'primary-light': "#51D88A",
      'primary-lightest': "#E3FCEC",
      'primary-dark': "#1F9D55",
      'primary-darkest': "#0F2F21",
      'secondary': "#38A89D",
      'secondary-light' : "",
      'secondary-lightest': "#E3FCEC",
      'secondary-dark': "#1F9D55",
      'secondary-darkest': "#0F2F21",
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
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
