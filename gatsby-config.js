module.exports = {
  pathPrefix: "/gatsby-bootstrap-redux-graphql-starter",
  siteMetadata: {
    title: `Gatsby React Bootstrap Redux Graphql Starter`,
    description: `A starter that includes react-bootstrap and react-icons, along with SASS compilation, with redux and graphq support.`,
    author: `Scott Tian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-bootstrap-redux-graphql-starter`,
        short_name: `react-bootstrap-redux-graphql`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
