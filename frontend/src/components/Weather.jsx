import React, { Component } from 'react';
import Separator from './Separator.jsx'

class Weather extends Component {
    render() {
        return (
            <div>
                <Separator />
                <h1>Weather Forecast</h1>
                <Separator />
                <table>
                    <tbody>
                    <tr>
                        <td>Forecast: </td><td>{this.props.forcast}</td>
                    </tr>
                    <tr>
                        <td>Visibility: </td><td>{this.props.viewDistance}</td>
                    </tr>
                    <tr>
                        <td>Conditions: </td><td>{this.props.conditions}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Weather;
