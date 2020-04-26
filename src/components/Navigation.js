import React, { Component } from "react";
// import { Link } from "gatsby";
import { ExternalLink, Menu } from "react-feather";
import logo from "../images/logo/logo_white.png";
export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
        };
    }

    toggleMenu = (value) => {
        this.setState({ openMenu: value });
    };

    handleScroll = () => {
        const { visibilityClass } = this.state;
        if (window.pageYOffset > 300) {
        } else {
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        const { openMenu, visibilityClass } = this.state;
        return (
            <nav className={`navbar navbar-expand-lg theme-bg`} id="mainNav">
                <div className="container">
                    <a className="navbar-branddddd" href="/">
                        <img
                            className="no-margin"
                            height="32"
                            src={logo}
                            alt="Logo - theAnubhav"
                        />
                    </a>
                    <button
                        onClick={(_) => this.toggleMenu(!openMenu)}
                        className={`navbar-toggler navbar-toggler-right ${
                            openMenu ? "" : "collapsed"
                        }`}
                        type="button"
                        aria-controls="navbarResponsive"
                        aria-expanded={openMenu}
                        aria-label="Toggle navigation"
                    >
                        <Menu size="24" />
                        <i className="fas fa-bars"></i>
                    </button>

                    <div
                        className={`collapse navbar-collapse ${
                            openMenu ? "show" : ""
                        }`}
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/projects" className="nav-link">
                                    Projects
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="/blogs" className="nav-link">
                                    Blog
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a
                                    target="_blank"
                                    href="https://devtips.theanubhav.com"
                                    rel="noopener noreferrer"
                                    className="nav-link"
                                >
                                    DevTips <ExternalLink size="12" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    target="_blank"
                                    href="https://about.theanubhav.com"
                                    rel="noopener noreferrer"
                                    className="nav-link"
                                >
                                    About me <ExternalLink size="12" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
