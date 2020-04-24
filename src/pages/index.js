import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostLink from "../components/post-link";
import NewsLetter from "../components/NewsLetter";

const HomePage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
}) => {
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
        <Layout title="Blogs" pageTitle="This is where I tell what I am upto!">
            {/* <h2>Blog Posts</h2> */}
            <div className="container">{Posts}</div>
        </Layout>
    );
};

export default HomePage;
export const pageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
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
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        thumbnail
                        subtitle
                        gist
                        tag
                        categories
                    }
                }
            }
        }
    }
`;
