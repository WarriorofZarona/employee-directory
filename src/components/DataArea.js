import React, { Component } from "react";
import DataTable from "./DataTable";
// import Nav from "./Nav";
// import SearchBox from "./SearchBox";
import API from "../utils/API";

class DataArea extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchEmployee("results", 50);
    }

    searchEmployee = (parameter, query) => {
        API.search(parameter, query)
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();


    }

    render() {
        return (
            <div>
                <DataTable
                    query={this.state.search}
                    results={this.state.results} />
                ))}
            </div>
        )
    }
}

export default DataArea;