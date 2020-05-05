import React from "react";
import TableHeader from "./TableHeader";
import DataBody from "./DataBody";

function DataTable(props) {
    let query = props.query;
    console.log("Props.query is the following:")
    if (!props.query) {
        console.log("There is none!")
    } else {
        console.log(props.query)
    }
    return (
        <div className="header">
            <table className="table">
                <TableHeader />
                <tbody>
                    {props.results.filter(data => {
                        if (!query) {
                            console.log("Query is blank")
                            console.log("blah blah blah")
                            console.log(data)
                            return data
                        } else if (data.name.first.toLowerCase().includes(query.toLowerCase()) || data.name.last.toLowerCase().includes(query.toLowerCase())) {
                            console.log("Query is " + query)
                            console.log(data)
                            return data
                        }
                    }).map(employee => (
                        <DataBody
                            thumbnail={employee.picture.thumbnail}
                            fullName={`${employee.name.first} ${employee.name.last}`}
                            address={`${employee.location.street.number} ${employee.location.street.name}`}
                            phone={employee.phone}
                            email={employee.email}

                        />
                    ))})
                </tbody>
            </table>
        </div>
    )

}

export default DataTable;
