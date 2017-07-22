import React, { Component } from 'react';
import Separator from './Separator.jsx'

class Support extends Component {
    render() {
        var artillery = this.props.artillery.map(function (r, i) {
            return (
                <Squad squad={r.name} model={r.model} key={i} />
            );
        });
        var air = this.props.air.map(function (r, i) {
            return (
                <Squad squad={r.name} model={r.model} key={i} />
            );
        });

        return (
            <div className="order">
                <Separator />
                <h1>Fire Support</h1>
                <Separator />
                <div>
                    <table>
                        <tbody>
                            <tr><td><h2>Artillery</h2></td></tr>
                            {artillery}
                            <tr><td><h2>Air</h2></td></tr>
                            {air}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class Squad extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.squad}: </td>
                <td>{this.props.model}</td>
            </tr>
        );
    }
}

export default Support;
