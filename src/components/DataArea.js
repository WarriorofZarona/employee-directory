import React, { Component } from "react";
import DataTable from "./DataTable";
import PageHeader from "./PageHeader"
import API from "../utils/API";

class DataArea extends Component {
    state = {
        search: "",
        results: [],
        order: "ascend"
    };

    componentDidMount() {
        this.searchEmployee();
    }

    searchEmployee = () => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            })
            .catch(err => console.log(err));
    };

    handleInputChange = value => {
        this.setState({ search: value })
        console.log("Search is " + this.state.search)
    }

    render() {
        return (
            <div>
                <PageHeader
                    handler={this.handleInputChange} />
                <DataTable
                    query={this.state.search}
                    results={this.state.results} />
            </div>
        )
    }
}

export default DataArea;