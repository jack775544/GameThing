import React, { Component } from 'react';
import Separator from './Separator.jsx'

class Status extends Component {
    render() {
        return (
            <div>
                <Separator />
                <h1>Theatre Status</h1>
                <Separator />
                <table>
                    <tbody>
                    <tr>
                        <td>Theatre: </td>
                        <td>{this.props.theatre}</td>
                    </tr>
                    <tr>
                        <td>Date: </td>
                        <td>{this.props.date}</td>
                    </tr>
                    <tr>
                        <td>Time: </td>
                        <td>{this.props.time}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Status;
