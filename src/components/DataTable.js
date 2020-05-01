import React from "react";
import Header from "./Header";
import DataBody from "./DataBody";

function DataTable(props) {
    return (
        <div className="header">
            <table class="table">
                <Header />
            </table>
        </div>
    )

}

export default DataTable;
