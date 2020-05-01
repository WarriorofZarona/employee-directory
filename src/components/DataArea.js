import React, { Component } from "react";
import DataTable from "./DataTable";
import Header from "./Header";
// import Nav from "./Nav";
import SearchBox from "./SearchBox";
import API from "../utils/API";

class DataArea extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchEmployee("results", 20);
    }

    searchEmployee = (parameter, query) => {
        API.search(parameter, query)
            .then(res => this.setState({ results: res.results }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {/* <Nav /> */}
                <p>Hello</p>
                <DataTable />
            </div>
        )
    }
}

export default DataArea;