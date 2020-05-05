import React, { Component } from "react";
import "./style.css";
import { render } from "@testing-library/react";

class SearchBox extends Component {
    state = { inputValue: '' };

    noEnter = () => {
        return !(window.event && window.event.keyCode == 13);
    }

    render() {
        return (
            <form className="search" >
                <div className="form-group text-center">
                    <input
                        onChange={(e) => {
                            this.setState({ inputValue: e.target.value });
                            this.props.handler(this.state.inputValue)
                        }}
                        onKeyPress={this.noEnter}
                        type="text"
                        className="form-control"
                        placeholder="Employee Name Search"
                        id="employee"
                    />
                </div>
            </form >
        )
    }
};

export default SearchBox;