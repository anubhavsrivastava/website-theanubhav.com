import React from "react";
import { GitHub, Twitter, Linkedin, Rss, Mail } from "react-feather";
import NewsLetter from "./NewsLetter";

export default function Footer() {
    return (
        <div className="mt-5 pt-4 footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xs-12 ">
                        <NewsLetter />
                    </div>
                    <div className="col-lg-3 col-xs-12 links">
                        <h4 className="mt-lg-0 mt-sm-3"></h4>
                        <ul className="m-0 p-0 no-bullets">
                            <li className="m-0 p-0">
                                <a className="hover-white" href="/uses">
                                    Uses
                                </a>
                            </li>
                            <li className="m-0 p-0">
                                <a className="hover-white" href="/sponsor">
                                    Sponsor Me
                                </a>
                            </li>
                            <li className="m-0 p-0">
                                <a className="hover-white" href="/thanks">
                                    Supporters
                                </a>
                            </li>
                            <li className="m-0 p-0">
                                <a className="hover-white" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12 ">
                        <ul className="list-inline  mx-auto mt-3">
                            <li className="list-inline-item ">
                                <a
                                    href="https://github.com/anubhavsrivastava"
                                    rel="noopener noreferrer"
                                    className="color-white"
                                >
                                    <GitHub size="24" />
                                </a>
                            </li>
                            {/* <li className="list-inline-item">
            <a href="https://www.facebook.com/theanubhav" target="_blank" rel="noopener noreferrer">
              <Facebook size="24" />
            </a> 
          </li> */}
                            <li className="list-inline-item">
                                <a
                                    href="https://twitter.com/onlyanubhav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-white"
                                >
                                    <Twitter size="24" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://linked.in/in/theanubhav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-white"
                                >
                                    <Linkedin size="24" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="mailto:me@theanubhav.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="color-white"
                                >
                                    <Mail size="24" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="/rss.xml"
                                    className="color-white"
                                >
                                    <Rss size="24" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Footer1() {
    return (
        <footer className="theme-bg">
            <div className="container ">
                <div className="row"></div>
            </div>
        </footer>
    );
}
