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
        this.searchEmployee("results", 20);
    }

    searchEmployee = (parameter, query) => {
        API.search(parameter, query)
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {/* <Nav /> */}
                <p>Hello</p>

                {this.state.results.map(employee => (
                    <DataTable
                        id={employee.id.value}
                    // thumbnail={this.state.results.picture.thumbnail}
                    // firstName={this.state.results.name.first.charAt(0).toUpperCase()}
                    />
                ))}

            </div>
        )
    }
}

export default DataArea;