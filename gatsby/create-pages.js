/* eslint-disable no-undef */
var path = require("path");
const createPostPages = require("./contentPages/create-blog-pages");
const createMainPages = require("./contentPages/create-pages");
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
    await createMainPages(graphql, actions, reporter);
    await createTagPages(graphql, actions, reporter);
    await createCategoryPages(graphql, actions, reporter);
}

module.exports = createPages;
