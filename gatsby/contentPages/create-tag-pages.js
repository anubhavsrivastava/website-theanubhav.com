"use strict";

const path = require("path");
const { kebabCase } = require("lodash");

module.exports = async (graphql, actions, reporter) => {
    const { createPage } = actions;

    const tagListTemplate = await path.resolve(`src/templates/tag-template.js`);

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                filter: {
                    frontmatter: {
                        template: { eq: "BlogPost" }
                        draft: { ne: true }
                    }
                }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            tag
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
        (node.frontmatter.tag || []).forEach((tag) => {
            createPage({
                path: `/tag/${kebabCase(tag)}/`,
                component: tagListTemplate,
                context: { tag: tag }, // additional data can be passed via context
            });
        });
    });
};
