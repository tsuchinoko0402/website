module.exports = {
  siteMetadata: {
    title: `OKAZAKI Shogo's Website`,
    author: {
      name: `OKAZAKI Shogo`,
      summary: `OKAZAKI Shogo's Website.`,
    },
    description: `OKAZAKI Shogo's Website`,
    siteUrl: `https://www.zakioka.net/`,
    social: {
      mail: `okazaki@zakioka.net`,
      twitter: `tsuchinoko0402`,
      facebook: `okazaki.shogo`,
      github: `tsuchinoko0402`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "目次",
              tight: false,
              fromHeading: 1,
              toHeading: 6,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-code-titles`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___updatedDate] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      updatedDate
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OKAZAKI Shogo's Website`,
        short_name: `OKAZAKI Shogo's Website`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a0d8ef`,
        display: `minimal-ui`,
        icon: `src/images/profile-circle.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://qiita.com/tsuchinoko0402/feed`,
        name: `Qiita`,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://note.com/tsuchinoko0402/rss`,
        name: `note`,
      },
    },
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "category",
          },
          {
            endpoint: "tag",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
