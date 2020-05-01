import React, { Component } from "react";

class Header extends Component {
    render() {
        const headings = [{
            key: 1,
            name: "Thumbnail"
        },
        {
            key: 2,
            name: "Id"
        },
        {
            key: 3,
            name: "Name"
        },
        {
            key: 4,
            name: "Address"
        },
        {
            key: 5,
            name: "Phone Number"
        },
        {
            key: 6,
            name: "E-mail"

        },
        {
            key: 7,
            name: "Date of Birth"
        }];

        return (
            <thead>
                <tr>
                    {headings.map(header => (
                        <th key={header.key} scope="col">{header.name}</th>

                    ))}
                </tr>
            </thead >
        )
    };

};

export default Header;
