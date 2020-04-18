import React, { Component } from "react";

export default class PageTitle extends Component {
    render() {
        const { title } = this.props;
        return title ? (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-10">
                        <div className="page-heading">
                            <hr className="small" />
                            <h4 className="page-subheading">{title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        ) : null;
    }
}
