"use strict";

const path = require("path");

module.exports = async (graphql, actions, reporter) => {
    const { createPage } = actions;

    const pageTemplate = await path.resolve(`src/templates/pageTemplate.js`);

    const result = await graphql(`
        {
            allMarkdownRemark(
                filter: {
                    frontmatter: {
                        template: { eq: "Page" }
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
            component: pageTemplate,
            context: {}, // additional data can be passed via context
        });
    });
};
