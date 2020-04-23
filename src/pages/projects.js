import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import { GitHub } from "react-feather";
// import { Link } from "gatsby";
import sideprojects from "./source/projects.json";
import curatedProjects from "./source/curated.json";
import ProjectListing from "../components/ProjectListing";

const SideProjects = () => {
    return (
        <Layout title="Side Projects">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-12 col-md-10 mt-5">
                        <h1> Projects</h1>
                        <p>
                            {/* You can also check them on{" "}
                            <a
                                href="https://github.com/anubhavsrivastava"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a> */}
                        </p>
                    </div>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    <div className="col-lg-10 col-md-10">
                        <h5>#Gatsby Starters</h5>
                        <ProjectListing
                            projects={[
                                {
                                    name: "Starters",
                                    description:
                                        "Multiple starters to bootstrap gatsby sites in minutes.",
                                    iconType: "file",
                                    category: "JavaScript",
                                    url: "/gatsby",
                                    repo: "",
                                    icon: "avatar-gatsby.svg",
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    <div className="col-lg-10 col-md-10">
                        <h5>#Curated List</h5>
                        <ProjectListing projects={curatedProjects} />
                    </div>
                </div>
                <div className="row mt-5 justify-content-md-center">
                    <div className="col-lg-10 col-md-10">
                        <h5>#Side Projects</h5>
                        <ProjectListing projects={sideprojects} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default SideProjects;
export const pageQuery = graphql`
    query SideProjectsQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
