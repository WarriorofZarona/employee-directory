import React, { Component } from "react";
import "./style.css";
import { render } from "@testing-library/react";

class SearchBox extends Component {
    state = { inputValue: '' };

    render() {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                        onChange={(e) => {
                            this.setState({ inputValue: e.target.value });
                            this.props.handler(this.state.inputValue)
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Employee Name Search"
                        id="employee"
                    />
                    <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
                        Search
        </button>
                </div>
            </form>
        )
    }
};

export default SearchBox;