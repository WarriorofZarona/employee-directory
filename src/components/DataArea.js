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

    handleOrderChange = () => this.state.order === "ascend" ? this.setState({ order: "descend" }) : this.setState({ order: "ascend" })

    compareFnc = (a, b) => {
        if (this.state.order === "ascend") {
            if (a[heading] === undefined) {
                return 1;
            } else if (b[heading] === undefined) {
                return -1;
            }
            else if (heading === "name") {
                return a[heading].first.localeCompare(b[heading].first);
            } else {
                return a[heading] - b[heading];
            }
        } else {
            if (a[heading] === undefined) {
                return 1;
            } else if (b[heading] === undefined) {
                return -1;
            }
            else if (heading === "name") {
                return b[heading].first.localeCompare(a[heading].first);
            } else {
                return b[heading] - a[heading];
            }
        }
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
                    results={this.state.results}
                    compareFnc={this.compareFnc}
                    order={this.state.order} />
            </div>
        )
    }
}

export default DataArea;