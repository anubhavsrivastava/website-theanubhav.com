import React, { Component } from "react";
import { HelpCircle } from "react-feather";

export default class NewsLetter extends Component {
    render() {
        return (
            <div className="footer">

                <h4> Subscribe for newsletters <a className="color-white" href="/newsletter"><HelpCircle size="24" /></a></h4>
                <form
                    action="https://buttondown.email/api/emails/embed-subscribe/theanubhav"
                    method="post"
                    target="popupwindow"
                    // onSubmit={()=>window.open('https://buttondown.email/theanubhav', 'popupwindow')"
                    className="embeddable-buttondown-form"
                >
                    <div className="form-group">
                        <label htmlFor="bd-email">
                            Enter your awesome email address
                        </label>
                        <br />
                        <input
                            className="mr-4 mb-1"
                            type="email"
                            name="email"
                            placeholder="gelvinbelson@hooli.com"
                            id="bd-email"
                        ></input>
                        <input type="hidden" value="1" name="embed"></input>
                        <input type="submit" value="Subscribe"></input>
                    </div>
                    {/* <p>
                    <a
                        href="https://buttondown.email"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Powered by Buttondown.
                    </a>
                </p> */}
                </form>
            </div>
        );
    }
}
