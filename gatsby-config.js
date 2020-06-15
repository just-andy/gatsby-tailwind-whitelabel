/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Whitelabel",
    address: "12 Acme Street, Edinburgh, EH123 123",
    telephone: "0131 123 456",
    email: "salon@justsalons.co.uk",
    titleTemplate: "%s · Just Andy Whitelabel Demo",
    description: "Demo of Just Andy's demo site.",
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Just Salons Demo`,
        short_name: `JS Demo`,
        start_url: `/`,
        background_color: `#48BB78`,
        theme_color: `#48BB78`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
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
