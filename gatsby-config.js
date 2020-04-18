/* eslint-disable no-undef */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteConfig = {
    title: `theAnubhav`,
    author: "Anubhav Srivastava",
    description: `theAnubhav - Showcase for Anubhav's work, blogs and projects`,
    siteUrl: `https://theanubhav.com/`,
};

module.exports = {
    siteMetadata: {
        title: siteConfig.title,
        author: siteConfig.author,
        description: siteConfig.description,
        siteUrl: siteConfig.siteUrl,
        home: {
            title: `Hi! I'm Anubhav`,
            description: `I have been specifically designed to become a digital home for designers and developers, help them build amazing professional looking websites with ease. You don't have to worry about nitty gritty of web hosting services to run a blog and yet take full advantage of CMS to manage content :)`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/_data`,
            },
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/styles/typography/typography.js",
            },
        },
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                      title
                      description
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) =>
                            allMarkdownRemark.edges.map((edge) => ({
                                description: edge.node.frontmatter.subtitle,
                                date: edge.node.frontmatter.date,
                                url:
                                    site.siteMetadata.siteUrl +
                                    edge.node.frontmatter.path,
                                guid:
                                    site.siteMetadata.siteUrl +
                                    edge.node.frontmatter.path,
                                custom_elements: [
                                    {
                                        "content:encoded":
                                            edge.node.frontmatter.gist,
                                    },
                                ],
                            })),
                        query: `
                    {
                      allMarkdownRemark(
                        limit: 1000,
                        sort: { order: DESC, fields: [frontmatter___date] },
                        filter: { frontmatter: { template: { eq: "BlogPost" }, draft: { ne: true } } }
                      ) {
                        edges {
                          node {
                            html 
                            frontmatter {
                              title
                              date
                              gist
                              template
                              draft
                              path
                              subtitle
                            }
                          }
                        }
                      }
                    }
                  `,
                        output: "/rss.xml",
                        title: siteConfig.title,
                        link: siteConfig.siteUrl,
                        site_url: siteConfig.siteUrl,
                        generator: siteConfig.siteUrl,
                    },
                ],
            },
        },

        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                            withWebp: true,
                            ignoreFileExtensions: [],
                        },
                    },
                    "gatsby-remark-autolink-headers",

                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-emojis",
                    },
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-smartypants",
                    "gatsby-remark-external-links",
                ],
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-45109327-2",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `theanubhav`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `theAnubhav's Work`,
                short_name: `WorkSalad`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        // `gatsby-plugin-netlify-cms`,
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
                  allSitePage(
                    filter: {
                      path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                    }
                  ) {
                    edges {
                      node {
                        path
                      }
                    }
                  }
                }
              `,
                output: "/sitemap.xml",
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map((edge) => ({
                        url: site.siteMetadata.siteUrl + edge.node.path,
                        changefreq: "daily",
                        priority: 0.7,
                    })),
            },
        },
        "gatsby-plugin-offline",
    ],
};
