import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import gatsbylist from "./gatsby.json";
import GitHubButton from "react-github-btn";
const GatsbyStartersPage = () => {
    return (
        <Layout title="Gatsby Starters">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-10 mt-5">
                        <h1> Gatsby Starters</h1>
                        <p>
                            You can also check this on official{" "}
                            <a
                                href="https://www.gatsbyjs.org/starters/?s=anubhav&v=2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                gatsby starters site.
                            </a>
                        </p>

                        <p>
                            Gatsby is a fast modern static site generator for
                            React. Useful for building blogs, e-commerce sites,
                            full-blown apps, etc. This site itself is built on
                            Gatsby. #JAMStack #GatsbyJS
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12 justify-content-md-center">
                        {gatsbylist.map((g) => {
                            let [proto, blank, domain, repo] = g.url.split("/");
                            let user = domain.split(".")[0];
                            return (
                                <div key={g.url} className="card project-card">
                                    <div
                                        className="card-img project-card-img"
                                        style={{
                                            backgroundImage: `url(${g.repo}/blob/master/src/assets/img/demo.png?raw=true)`,
                                        }}
                                    >
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <a
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href={g.url}
                                                >
                                                    View Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-card-content">
                                        <div className="main-card-content">
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <GitHubButton
                                                        href={g.repo}
                                                        data-show-count="true"
                                                        aria-label={`Star ${user}/${repo} on GitHub`}
                                                    >
                                                        Star
                                                    </GitHubButton>
                                                </div>
                                                <div className="float-right">
                                                    <GitHubButton
                                                        href={g.repo}
                                                        data-show-count="true"
                                                        aria-label={`Fork ${user}/${repo} on GitHub`}
                                                    >
                                                        Fork
                                                    </GitHubButton>
                                                </div>
                                            </div>
                                            <h2 className="text-center">
                                                <strong>
                                                    {repo.split("-")[2]}
                                                </strong>
                                            </h2>
                                            <p>{g.description}</p>
                                            <a
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={g.repo}
                                            >
                                                <GitHubButton
                                                    href={g.repo}
                                                    data-size="large"
                                                    // data-show-count="true"
                                                >
                                                    Source
                                                </GitHubButton>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default GatsbyStartersPage;
export const pageQuery = graphql`
    query GatsbyStartersPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
