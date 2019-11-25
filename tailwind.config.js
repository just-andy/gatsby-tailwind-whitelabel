// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      'primary-100': "#F0FFF4",
      'primary-300': "#9AE6B4",
      'primary-500': "#48BB78",
      'primary-700': "#276749",
      'primary-900': "#22543D",
      'secondary-100': "#E6FFFA",
      'secondary-300' : "#81E6D9",
      'secondary-500': "#38B2AC",
      'secondary-700': "#2C7A7B",
      'secondary-900': "#234E52",
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
