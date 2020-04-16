import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const HomePage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <Layout>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={site.siteMetadata.description}
                />
            </Helmet>
            {/* <HeroHeader /> */}
            {/* <h2>Blog Posts</h2> */}
            <div className="grids">{Posts}</div>
        </Layout>
    );
};

export default HomePage;
export const pageQuery = graphql`
    query HomePageQuery {
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
                    }
                }
            }
        }
    }
`;
