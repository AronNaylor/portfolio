module.exports = {
  siteMetadata: {
    title: `Aron Naylor`,
    description: `Frontend developer portfolio`,
    author: `Aron Naylor`,
    date: `2020`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aron-naylor-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#0000FF`,
        theme_color: `#0000FF`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
