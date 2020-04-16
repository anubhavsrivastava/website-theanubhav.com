import React from "react";
// import { Link, useStaticQuery, graphql } from "gatsby";
import "../styles/custom.scss";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./seo";
// import "prismjs/themes/prism-okaidia.css";

export default function Layout({ children, title }) {
    return (
        <>
            <SEO title={title} />
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}
