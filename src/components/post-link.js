import React from "react";
import { kebabCase } from "lodash";

// import { Link } from "gatsby";

const PostLink = ({ post }) => {
    const { date, path, title, subtitle, gist, tag } = post.frontmatter;
    return (
        <article className="post-preview">
            <p className="post-meta">Posted on {date}</p>
            <a href={path}>
                <h2 className="post-title">{title}</h2>
            </a>
            <h5 className="post-subtitle">{subtitle}</h5>
            <div className="po2st-entry-container">
                <span className="po2st-entry">{gist}</span>
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
        // <article className="card ">
        //     <header>
        //         <h2 className="post-title">
        //             <Link to={post.frontmatter.path} className="post-link">
        //                 {post.frontmatter.title}
        //             </Link>
        //         </h2>
        //         <div className="post-meta">{post.frontmatter.date}</div>
        //     </header>
        // </article>
    );
};
export default PostLink;
