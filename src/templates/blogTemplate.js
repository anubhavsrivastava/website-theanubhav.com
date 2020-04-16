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
    const {
        date,
        path,
        title,
        thumbnail,
        subtitle,
        gist,
        categories,
        tag,
        ghrepo,
    } = frontmatter;

    let user = "";
    let repo = "";
    if (ghrepo) {
        [user, repo] = ghrepo.split("/");
    }
    let disqusConfig = {
        url: `${site.siteMetadata.siteUrl + location.pathname}`,
        title: title,
    };

    return (
        <Layout title={frontmatter.title}>
            <Helmet>
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
                        <div id="header-gh-btns">
                            {ghrepo ? (
                                <>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="120px"
                                        height="20px"
                                    ></iframe>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=watch&v=2&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="120px"
                                        height="20px"
                                    ></iframe>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=fork&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="120px"
                                        height="20px"
                                    ></iframe>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=${user}&type=follow&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="220px"
                                        height="20px"
                                    ></iframe>
                                </>
                            ) : (
                                ""
                            )}
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
                ghrepo
            }
        }
    }
`;
