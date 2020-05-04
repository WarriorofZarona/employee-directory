import React from "react";
import "./style.css"

function PageHeader() {

    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Type in your search below to search for an employee's name</p>
            <hr className="my-4" />
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    )
}

export default PageHeader;