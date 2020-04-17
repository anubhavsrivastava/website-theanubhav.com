import React from "react";
import { GitHub, Twitter, Linkedin, Rss, Mail } from "react-feather";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <ul className="list-inline float-right">
                    <li className="list-inline-item">
                        <a
                            href="https://github.com/anubhavsrivastava"
                            rel="noopener noreferrer"
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
                        >
                            <Twitter size="24" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="https://linked.in/in/theanubhav"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size="24" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="mailto:me@theanubhav.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail size="24" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/rss.xml">
                            <Rss size="24" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
