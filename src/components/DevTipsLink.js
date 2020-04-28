import React from "react";
import { kebabCase } from "lodash";

const DevTipsLink = ({ post }) => {
    const { title, link, contentSnippet, isoDate } = post;
    return (
        <article className={`post-preview small`}>
            <p className="post-meta">Posted on {isoDate}</p>
            <a href={link}>
                <h2 className="post-title">{title}</h2>
            </a>
            <h5 className="post-subtitle">{contentSnippet}</h5>
        </article>
    );
};
export default DevTipsLink;
