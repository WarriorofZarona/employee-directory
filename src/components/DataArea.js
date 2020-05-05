import React, { Component } from "react";
import DataTable from "./DataTable";
import PageHeader from "./PageHeader"
import API from "../utils/API";

class DataArea extends Component {
    state = {
        search: "",
        results: []
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

    handleInputChange = event => {
        event.preventDefault();
        this.setState({ search: event.target.value })
    }


    render() {
        return (
            <div>
                <PageHeader />
                <DataTable
                    query={this.state.search}
                    results={this.state.results} />
                ))}
            </div>
        )
    }
}

export default DataArea;