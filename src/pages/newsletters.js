import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import NLLink from "../components/nl-link";

const HomePage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const nls = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your nls based on some criteria
        .map((edge) => (
            <div key={edge.node.id} className="row">
                <div className="col-lg-12 col-md-10">
                    <NLLink post={edge.node} />
                </div>
            </div>
        ));

    return (
        <Layout title="Newsletter Archives" pageTitle="Newsletter Archives">
            <div className="container">{nls}</div>
        </Layout>
    );
};

export default HomePage;
export const pageQuery = graphql`
    query NewsletterPageQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
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
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        issue
                    }
                }
            }
        }
    }
`;
