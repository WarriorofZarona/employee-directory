import React from "react";
import "./style.css";
import SearchBox from "../SearchBox";

function PageHeader() {

    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Type in search bar below for an employee's name</p>
            <hr className="my-4" />
            <SearchBox />
        </div>
    )
}

export default PageHeader;