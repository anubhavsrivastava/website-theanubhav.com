// @flow strict
import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import Layout from "../components/Layout";
// import Sidebar from "../components/Sidebar";
// import Page from "../components/Page";
import { useTagsList } from "../hooks";

const TagsListTemplate = () => {
    // const { title, description } = site.siteMetadata;
    const tags = useTagsList();
    return (
        <Layout title="Blogs:Tags" pageTitle="All Tags">
            <div className="container">
                <ul>
                    {tags.map((tag) => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default TagsListTemplate;
