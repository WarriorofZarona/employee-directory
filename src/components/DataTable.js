import React from "react";
import TableHeader from "./TableHeader";
import DataBody from "./DataBody";

function DataTable(props) {
    return (
        <div className="header">
            <table className="table">
                <TableHeader />
                <tbody>
                    {props.results.map(employee => (
                        <DataBody
                            thumbnail={employee.picture.thumbnail}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            address={`${employee.location.street.number} ${employee.location.street.name}`}
                            phone={employee.phone}
                            email={employee.email}

                        />
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default DataTable;
