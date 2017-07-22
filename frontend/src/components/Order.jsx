import React, { Component } from 'react';
import Separator from './Separator.jsx'

class Order extends Component {
    render() {
        var subunitList = this.props.subunits.map(function (r, i) {
            return (
                <Subunit name={r} key={i} />
            );
        });
        return (
            <div className="order">
                <Separator />
                <h1>Order of Battle</h1>
                <Separator />
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Unit: </td>
                                <td>{this.props.unit} </td>
                            </tr>
                            {subunitList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class Subunit extends Component {
    render() {
        return (
            <tr>
                <td>Subunit: </td>
                <td>{this.props.name}</td>
            </tr>
        );
    }
}

export default Order;
