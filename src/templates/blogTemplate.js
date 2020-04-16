import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/prismjs/custom.css";
import "prismjs/themes/prism.css";
import { Disqus } from "gatsby-plugin-disqus";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";
export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark, site } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    console.log(site);
    const {
        date,
        path,
        title,
        thumbnail,
        subtitle,
        gist,
        categories,
        tag,
    } = frontmatter;

    let disqusConfig = {
        url: `${site.siteMetadata.siteUrl + location.pathname}`,
        title: title,
    };
    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.subtitle} />
            </Helmet>
            <div className="blog-post-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-10">
                            <div>
                                <h1 style={{ fontSize: "3em" }}>
                                    {title ? title : <br />}{" "}
                                </h1>

                                {subtitle ? (
                                    <h3
                                        style={{
                                            fontStyle: "italic",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {subtitle}
                                    </h3>
                                ) : (
                                    ""
                                )}

                                <span className="post-meta">
                                    Posted on {date}
                                </span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        {/* {!frontmatter.thumbnail && (
                        <div className="post-thumbnail">
                            <h1 className="post-title">{frontmatter.title}</h1>
                            <div className="post-meta">{frontmatter.date}</div>
                        </div>
                    )}
                    {!!frontmatter.thumbnail && (
                        <div
                            className="post-thumbnail"
                            style={{
                                backgroundImage: `url(${frontmatter.thumbnail})`,
                            }}
                        >
                            <h1 className="post-title">{frontmatter.title}</h1>
                            <div className="post-meta">{frontmatter.date}</div>
                        </div>
                    )} */}
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                    <Disqus config={disqusConfig} />
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
            }
        }
    }
`;
