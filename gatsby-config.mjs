import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  siteMetadata: {
    title: "Zenika Open Source",
    description: "Insights about Zenika's Open Source contributions",
    author: "@ZenikaOSS",
    siteUrl: "https://oss.zenika.com",
    image: "https://oss.zenika.com/sharing.jpg",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/white-paper`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zenika Open Source Website",
        short_name: "OSS by Zenika",
        description: "Insights about the Open Source activity of Zenika",
        lang: "en",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/white-paper/*"],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-138180707-1",
        anonymize: true,
        respectDNT: true,
        head: false,
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
  ],
};
