/* eslint-disable no-undef */
var path = require("path");
const createPostPages = require("./contentPages/create-blog-pages");
const createTagPages = require("./contentPages/create-tag-pages");
const createCategoryPages = require("./contentPages/create-category-pages");

async function createPages({ actions, graphql, reporter }) {
    const { createPage } = actions;

    // 404;
    createPage({
        path: "/404",
        component: path.resolve("./src/templates/404.js"),
    });

    createPage({
        path: "/tags",
        component: path.resolve("./src/templates/tags-list-template.js"),
    });

    // Categories list
    createPage({
        path: "/categories",
        component: path.resolve("./src/templates/categories-list-template.js"),
    });

    await createPostPages(graphql, actions, reporter);
    await createTagPages(graphql, actions, reporter);
    await createCategoryPages(graphql, actions, reporter);

    // const blogPostTemplate = await path.resolve(
    //     `src/templates/blogTemplate.js`
    // );

    // const result = await graphql(`
    //     {
    //         allMarkdownRemark(
    //             sort: { order: DESC, fields: [frontmatter___date] }
    //             limit: 1000
    //         ) {
    //             edges {
    //                 node {
    //                     id
    //                     frontmatter {
    //                         path
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    // // Handle errors
    // if (result.errors) {
    //     reporter.panicOnBuild(`Error while running GraphQL query.`);
    //     return;
    // }

    // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //     createPage({
    //         path: node.frontmatter.path,
    //         component: blogPostTemplate,
    //         context: {}, // additional data can be passed via context
    //     });
    // });
}

module.exports = createPages;
