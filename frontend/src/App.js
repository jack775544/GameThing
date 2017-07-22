import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
 * <div className="App">
 <div className="App-header">
 <img src={logo} className="App-logo" alt="logo"/>
 <h2>Welcome to React</h2>
 </div>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>
 </div>
 * */
class App extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <Separator />
                    <h1>Command & Control OS v3.4.1</h1>
                    <Separator />
                    <p>Access Level: 4</p>
                    <p>Authorisation: Authorised</p>
                </header>
                <Status theatre="place" date="date" time="time oclock" />
                <Weather forcast="forcast" viewDistance="100m" conditions="cloudy" />
                <Order unit="5th thing battalion" subunits={["first division", "second division", "third division"]} />
            </div>
        );
    }
}

class Separator extends Component {
    render() {
        return (
            <div>---------------------------------------------------------------</div>
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

export default App;
