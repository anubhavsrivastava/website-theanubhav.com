"use strict";

const path = require("path");

module.exports = async (graphql, actions, reporter) => {
    const { createPage } = actions;

    const newsLetterTemplate = await path.resolve(
        `src/templates/newsLetterTemplate.js`
    );

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                filter: {
                    frontmatter: {
                        template: { eq: "newsLetter" }
                        draft: { ne: true }
                    }
                }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: newsLetterTemplate,
            context: {}, // additional data can be passed via context
        });
    });
};
