import React from "react";
import { kebabCase } from "lodash";

const PostLink = ({ post, type }) => {
    const { date, path, title, subtitle, gist, tag } = post.frontmatter;
    return (
        <article className={`post-preview ${type}`}>
            <p className="post-meta">Posted on {date}</p>
            <a href={path}>
                <h2 className="post-title">{title}</h2>
            </a>
            <h5 className="post-subtitle">{subtitle}</h5>
            <div className="post-entry-container">
                <span className="post-esntry">{gist}</span>
            </div>

            <div className="blog-tags">
                Tags:
                {tag.map((t) => {
                    return (
                        <a key={t} href={`/tag/${kebabCase(t)}`}>
                            {t}
                        </a>
                    );
                })}
            </div>
        </article>
    );
};
export default PostLink;
