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
                <h1>Render test</h1>
                {/* <Nav /> */}
                <DataTable results={this.state.results} />
                ))}

            </div>
        )
    }
}

export default DataArea;