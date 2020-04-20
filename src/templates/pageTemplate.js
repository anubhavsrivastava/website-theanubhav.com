import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import "../styles/prismjs/custom.css";
// import "prismjs/themes/prism.css";
export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    const { path, title } = frontmatter;

    return (
        <Layout title={title}>
            <div className="blog-post-container mt-5 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-10">
                            <div>
                                <h1 style={{ fontSize: "3em" }}>
                                    {title ? title : <br />}{" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-12 col-md-10">
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                thumbnail
                subtitle
                gist
                categories
                tag
                ghrepo
            }
        }
    }
`;
