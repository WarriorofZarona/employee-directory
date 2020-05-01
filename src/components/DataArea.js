import React, { Component } from "react";
import DataTable from "./DataTable";
import Header from "./Header";
// import Nav from "./Nav";
import SearchBox from "./SearchBox";

class DataArea extends Component {
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