import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../styles/prismjs/custom.css";
import "prismjs/themes/prism.css";
import { Disqus } from "gatsby-plugin-disqus";
import Fade from "react-reveal/Fade";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";
export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark, site } = data; // data.markdownRemark holds your post data
    const { frontmatter, html, fields} = markdownRemark;
    const { date, path, title, subtitle, ghrepo } = frontmatter;

    let user = "";
    let repo = "";
    if (ghrepo) {
        [user, repo] = ghrepo.split("/");
    }
    let disqusConfig = {
        url: `${site.siteMetadata.siteUrl + path}`,
        title: title,
    };

    return (
        <Layout title={title}>
            <Helmet>
                <meta name="description" content={frontmatter.subtitle} />
            </Helmet>

            <div className="blog-post-container mt-5">
                <div className="container">
                    
                  
                    <div className="row">
                        <div className="col-lg-12 col-md-10">
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
            fields {
                
                readingTime {
                  text
                  minutes
                }
              }
        }
    }
`;
