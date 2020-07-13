import React from "react";

const NLLink = ({ post, type }) => {
    const { date, path, title, issue } = post.frontmatter;
    return (
        <article className={`align-middle ${type}`}>

            <a className="d-inline-block float-let" href={path}>
                <h2 >Issue #{issue} : {title}</h2>
            </a>
            <p className="ml-3 d-inline-block font-weight-light " > {date}</p>
        </article>
    );
};
export default NLLink;
