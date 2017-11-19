/**
 * Created by jai on 18/06/17.
 */
import React from "react";
import Table from "../table/table-component";
class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
        this.cols = [
            {
                value: 'Name',
                key: "name"
            },
            {
                value: 'Addrees',
                key: "address"
            },
            {
                value: "City",
                key: 'city'
            },
            {
                value: "Interested In",
                key: 'interested_in'
            }
        ];

        this.rows = [
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product1"
            }, {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product2"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product3"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product4"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product5"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product6"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product7"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product8"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product9"
            },
            {
                name: 'Jai',
                address: "Abhayan",
                city: "BLR",
                interested_in: "Product10"
            }
        ];

        this.sortBy = [
            {value: "pop"}, {value: "top"}, {value: "nope"}, {value: "lll"}
        ];
    }

    render() {
        return (
            <div>
                <Table colsConfig={this.cols}
                       rows={this.rows}
                       sortByConfig={this.sortBy}
                />
            </div>
        );
    }
}

export default UsersComponent;