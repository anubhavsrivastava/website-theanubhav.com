import React, { Component } from "react";

export default class NewsLetter extends Component {
    render() {
        return (
            <div className="footer">
                <h4> Join monthly Newsletter</h4>
                <form
                    action="https://buttondown.email/api/emails/embed-subscribe/theanubhav"
                    method="post"
                    target="popupwindow"
                    onSubmit="window.open('https://buttondown.email/theanubhav', 'popupwindow')"
                    className="embeddable-buttondown-form"
                >
                    <div className="form-group">
                        <label htmlFor="bd-email">
                            Enter your awesome email
                        </label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="gunther@friend.com"
                            id="bd-email"
                        ></input>
                        <input type="hidden" value="1" name="embed"></input>
                        <input
                            className="ml-4"
                            type="submit"
                            value="Subscribe"
                        ></input>
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
