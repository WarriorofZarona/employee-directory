import React from "react";
import Header from "./Header";
import DataBody from "./DataBody";

function DataTable(props) {
    return (
        <div className="header">
            <table className="table">
                <Header />
                <tbody>
                    <DataBody
                        id={props.id}
                        thumbnail={props.thumbnail}
                        firstName={props.firstName}
                        lastName={props.lastName}
                        address={props.address}
                        email={props.email}
                        dob={props.dob}
                    />
                </tbody>
            </table>
        </div>
    )

}

export default DataTable;
