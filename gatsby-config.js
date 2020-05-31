/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Just Salons",
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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
          key: ` AIzaSyC61Q94Nqr09m--A61D0hZ_BgHnP1YJdvM`,
          center: `41.8781,-87.6298 || Edinburgh,West Lothian`,
      }
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
