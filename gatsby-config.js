module.exports = {
  siteMetadata: {
    title: `Zenika Open Source`,
    description: `Insights about Zenika's Open Source contributions`,
    author: `@ZenikaOSS`,
    siteUrl: `https://oss.zenika.com`,
    image: `https://oss.zenika.com/sharing.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenika Open Source`,
        short_name: `OSS by Zenika`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138180707-1",
        anonymize: true,
        respectDNT: true,
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
  ]
};
