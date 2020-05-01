import React, { Component } from "react";
import DataTable from "./DataTable";
import Header from "./Header";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import API from "../utils/API"

class DataArea extends Component {
    render() {
        return (
            <DataTable />
        )
    }
}

export default DataArea;