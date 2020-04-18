// @flow strict
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import { useCategoriesList } from "../hooks";

const CategoriesListTemplate = () => {
    const categories = useCategoriesList();

    return (
        <Layout title="Blogs:Categories" pageTitle="All Categories">
            <div className="container">
                <ul>
                    {categories.map((category) => (
                        <li key={category.fieldValue}>
                            <Link
                                to={`/category/${kebabCase(
                                    category.fieldValue
                                )}/`}
                            >
                                {category.fieldValue} ({category.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default CategoriesListTemplate;
