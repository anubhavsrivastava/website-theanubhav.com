/* eslint-disable no-undef */
import React, { Component } from "react";
import GitHubButton from "react-github-btn";

class ProjectIcon extends Component {
    render() {
        let { icon, iconType } = this.props;
        if (iconType === "file") {
            icon = icon || "avatar-gh.png";
            return <img src={require(`../../static/img/avatars/${icon}`)} />;
        }
        if (iconType === "data") {
            return <img src={icon} />;
        }
        if (iconType === "string") {
            return <p className="icon">{icon} </p>;
        }

        return "";
    }
}
export default class ProjectListing extends Component {
    render() {
        const { projects } = this.props;

        return (
            <section className="projects">
                {projects.map((project) => (
                    <div className="each" key={project.title}>
                        <h2>
                            <a
                                className="project-link"
                                href={project.url || project.repo}
                                target={project.internal ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                            >
                                <div className="project-icon">
                                    <ProjectIcon {...project} />
                                </div>
                            </a>
                        </h2>
                        <div className="project-title">
                            <p className="text-uppercase">{project.name}</p>
                            <span>{project.description}</span>
                        </div>
                        <div className="buttons">
                            {project.repo && (
                                <GitHubButton
                                    href={project.repo}
                                    data-size="large"
                                    data-show-count="true"
                                >
                                    Source
                                </GitHubButton>
                            )}
                            {project.url && (
                                <a
                                    className="button"
                                    href={project.url}
                                    target={
                                        project.internal ? "_self" : "_blank"
                                    }
                                    rel="noopener noreferrer"
                                >
                                    Link
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        );
    }
}
