import React from "react";
import "./style.css"

function SearchBox(props) {

    return (
        <form className="search">
            <div className="form-group text-center">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="name"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Employee Name Search"
                    id="employee"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
        </button>
            </div>
        </form>
    )
};

export default SearchBox;