import React, { Component } from "react";
// import { Link } from "gatsby";
import { ExternalLink } from "react-feather";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            visibilityClass: "",
        };
    }

    toggleMenu = (value) => {
        this.setState({ openMenu: value });
    };

    handleScroll = () => {
        const { visibilityClass } = this.state;
        if (window.pageYOffset > 300) {
            if (visibilityClass !== "navbar-shrink") {
                this.setState({ visibilityClass: "navbar-shrink" });
            }
        } else {
            if (visibilityClass === "navbar-shrink") {
                this.setState({ visibilityClass: "" });
            }
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
            <nav
                className={`navbar navbar-expand-lg navbar-light ${visibilityClass}`}
                id="mainNav"
            >
                <div className="container">
                    <a className="navbar-brand"></a>
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
                        Menu
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
                                <a href="/blogs" className="nav-link">
                                    Blog
                                </a>
                            </li>
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
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
