import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

const NotFoundTemplate = ({ data }) => {
    const { description } = data.site.siteMetadata;

    return (
        <Layout pageTitle="404 NOT FOUND" title={`404 Not Found`}>
            <Helmet>
                <meta name="description" content={description} />
            </Helmet>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 mx-auto mt-5">
                        <p>
                            You just hit a route that doesn&#39;t exist... the
                            sadness of all mankind!.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query NotFoundQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

export default NotFoundTemplate;
