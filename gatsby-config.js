/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Just Salons Demo",
    titleTemplate: "%s · Just Salons Demo",
    description: "Demo of Just Salons site.",
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/banner.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@justandydesign1",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand`,
        ],
        display: 'swap'
      }
    }
  ],
}
