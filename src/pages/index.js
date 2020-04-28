import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostLink from "../components/post-link";
import heroImage from "../images/self.png";
import DevTipsLink from "../components/DevTipsLink";
const HomePage = ({
    data: {
        allMarkdownRemark: { edges },
        allFeedDevtips: { edges: feedEdges },
    },
}) => {
    const Posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => (
            <div key={edge.node.id} className="row">
                <div className="col-lg-12 col-md-10">
                    <PostLink post={edge.node} type={"small"} />
                </div>
            </div>
        ));

    const Tips = feedEdges
        .filter((edge) => !!edge.node.isoDate) // You can filter your posts based on some criteria
        .map((edge) => (
            <div key={edge.node.id} className="row">
                <div className="col-lg-12 col-md-10">
                    <DevTipsLink post={edge.node} />
                </div>
            </div>
        ));

    return (
        <Layout title="Home">
            <div className="container mt-5">
                <div className="main-content row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h1 className="huge">Hello,</h1>
                        <h1 className="bold huge">World.</h1>
                        <div className="subheading">
                            <p>
                                👋 Hi! this is <strong>Anubhav</strong>, I am
                                Developer, writer in my spare time, tech
                                addicted, open-source lover.
                            </p>
                            <p>
                                I blog about things related to web that I find
                                worth sharing with the community. I also share
                                my side projects and stuff that I am currently
                                working on.
                            </p>
                            <p>Thanks for dropping by!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-10 col-sm-12">
                        <img src={heroImage} />
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mt-5">
                <h4>#Latest Posts</h4>
                {Posts}
                <div className="row w-100 clearfix">
                    <div className="col-lg-12 col-md-10 ">
                        <a href="/blogs" className="h4 float-right">
                            View All Post
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mt-5">
                <h4>#Devtips</h4>
                {Tips}
                <div className="row w-100 clearfix">
                    <div className="col-lg-12 col-md-10 ">
                        <a
                            href="https://devtips.theanubhav.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h4 float-right"
                        >
                            View All Tips
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
export const pageQuery = graphql`
    query IndexPageQuery {
        allFeedDevtips(limit: 5, sort: { order: DESC, fields: [isoDate] }) {
            edges {
                node {
                    id
                    title
                    link
                    contentSnippet
                    isoDate(formatString: "MMMM DD, YYYY")
                }
            }
        }
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 3
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
