import React from "react";
import Header from "./Header";
import DataBody from "./DataBody";

function DataTable(props) {
    return (
        <div className="header">
            <table className="table">
                <Header />
                <tbody>
                    <DataBody />
                </tbody>
            </table>
        </div>
    )

}

export default DataTable;
