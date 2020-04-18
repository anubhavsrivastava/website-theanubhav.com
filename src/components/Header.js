import React, { Component } from "react";
import Navigation from "../components/Navigation";

// const site = { url: "theanubhav.com";
// avatar: require("../../static/") };
// import config from "../../config";
// import Scroll from "./Scroll";
export default class Header extends Component {
    render() {
        // return (
        //     <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        //         <div className="container-fluid">
        //             <div className="navbar-header">
        //                 <button
        //                     type="button"
        //                     className="navbar-toggle"
        //                     data-toggle="collapse"
        //                     data-target="#main-navbar"
        //                 >
        //                     <span className="sr-only">Toggle navigation</span>
        //                     <span className="icon-bar"></span>
        //                     <span className="icon-bar"></span>
        //                     <span className="icon-bar"></span>
        //                 </button>
        //                 <div className="nav-short-home hide">
        //                     <a
        //                         className="navbar-brand navbar-brand-logo"
        //                         href="{{ site.url }}"
        //                     >
        //                         <img src="{{ site.avatar }}" />
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // );
        return <Navigation />;
    }
}
