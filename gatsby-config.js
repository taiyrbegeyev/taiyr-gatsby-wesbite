require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Taiyr Begeyev`,
    siteTitleAlt: `Taiyr Begeyev`,
    siteHeadline: 'Taiyr Begeyev',
    siteUrl: 'https://taiyr.me',
    siteDescription: 'Hi there! My name is Taiyr. I am a second year Computer Science student at Jacobs University Bremen and this is my personal website',
    siteLanguage: 'en',
    siteImage: 'taiyr_desktop.jpg',
    author: 'Taiyr Begeyev',
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/taiyrbegeyev`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/taiyrbegeyev`
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/tbegeyev`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/taiyrbegeyev`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taiyr Begeyev`,
        short_name: `Taiyr Begeyev`,
        description: `Hi there! My name is Taiyr. I am a second year Computer Science student at Jacobs University Bremen and this is my personal website.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icons: [
          {
            "src": "/android-chrome-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
