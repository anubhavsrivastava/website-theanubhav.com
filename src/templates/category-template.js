// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostLink from "../components/post-link";

const CategoryTemplate = (para) => {
    const {
        data: {
            allMarkdownRemark: { edges },
        },
        pageContext,
    } = para;
    const Posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => (
            <div key={edge.node.id} className="row">
                <div className="col-lg-12 col-md-10">
                    <PostLink post={edge.node} />
                </div>
            </div>
        ));

    return (
        <Layout
            title={`Category: ${pageContext.category}`}
            pageTitle={`Category : ${pageContext.category}`}
        >
            <div className="container">{Posts}</div>
        </Layout>
    );
};

export const query = graphql`
    query CategoryPageList($category: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {
                frontmatter: {
                    categories: { in: [$category] }
                    template: { eq: "BlogPost" }
                    draft: { ne: true }
                }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        date
                        categories
                        tag
                    }
                }
            }
        }
    }
`;

export default CategoryTemplate;
