import React from "react";
// import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./seo";
import PageTitle from "./PageTitle";
// import "prismjs/themes/prism-okaidia.css";

export default function Layout({ children, title, pageTitle }) {
    return (
        <>
            <SEO title={title} />
            <div>
                <Header />
                <PageTitle title={pageTitle} />
                {children}
                <Footer />
            </div>
        </>
    );
}
