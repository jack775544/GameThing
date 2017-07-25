import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Separator from './components/Separator.jsx';

class Admin extends Component {
    handleSave = (e) => {
        alert("Saving is not done yet");
    }

    handleSend = (e) => {
        let state = {
            "unit": this.state.unit,
            "subunits": this.state.subunits.split("\n"),
            "theatre": this.state.theatre,
            "date": this.state.date,
            "time": this.state.time,
            "weather": this.state.weather,
            "viewDistance": this.state.viewDistance,
            "conditions": this.state.conditions,
            "air": this.state.air.split("\n").map(function(e){
                let c = e.split(","); 
                return {[c[0]]: c[1]};
            }),
            "artillery": this.state.artillery.split("\n").map(function(e){
                let c = e.split(","); 
                return {[c[0]]: c[1]};
            })
        }
        console.log(state);
        console.log(JSON.stringify(state));
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    printState = () => {
        window.a = this.state;
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Admin Interface</h1>
                <div>
                    <Separator />
                    <h2>Unit: </h2>
                    <input onChange={this.handleInputChange} type="text" id="unit" name="unit" />
                    <Separator />
                    <h2>Subunits: </h2>
                    <p>Put each new subunit on a new line</p>
                    <textarea onChange={this.handleInputChange} id="subunits" name="subunits" ></textarea>
                    <Separator />
                    <h2>Theatre: </h2>
                    <input onChange={this.handleInputChange} type="text" id="theatre" name="theatre" />
                    <Separator />
                    <h2>Date: </h2>
                    <input onChange={this.handleInputChange} type="text" id="date" name="date" />
                    <Separator />
                    <h2>Time: </h2>
                    <input onChange={this.handleInputChange} type="text" id="time" name="time" />
                    <Separator />
                    <h2>weather: </h2>
                    <input onChange={this.handleInputChange} type="text" id="weather" name="weather" />
                    <Separator />
                    <h2>viewDistance: </h2>
                    <input onChange={this.handleInputChange} type="text" id="viewDistance" name="viewDistance" />
                    <Separator />
                    <h2>conditions: </h2>
                    <input onChange={this.handleInputChange} type="text" id="conditions" name="conditions" />
                    <Separator />
                    <h2>Air: </h2>
                    <p>Place the squad and model comma separated. New squads go on new lines</p>
                    <textarea onChange={this.handleInputChange} id="air" name="air" ></textarea>
                    <Separator />
                    <h2>Artillery: </h2><textarea onChange={this.handleInputChange} id="artillery" name="artillery"></textarea>
                    <p>Place the division and model comma separated. New squads go on new lines</p>
                    <Separator />
                </div>
                <button onClick={this.handleSave}>Save Config</button>
                <button onClick={this.handleSend}>Send Config</button>
                <button onClick={this.printState}>Print State</button>
                <Link to="/">Game</Link>
            </div>
        );
    }
}

/* 
state = {
    "unit": "The thingo brigade",
    "subunits": [
        "1st regiment",
        "2nd regiment",
        "3rd regiment"
    ],
    "theatre": "West Germany",
    "date": "1984-03-18",
    "time": "1300 hours",
    "weather": "Foggy",
    "viewDistance": "200m",
    "conditions": "rainy",
    "air": [
        {"name": "1st Squad", "model": "MIG"},
        {"name": "2nd Squad", "model": "MIG21"},
        {"name": "3rd Squad", "model": "Some Other plane"}
    ],
    "artillery": [
        {"name": "1st regiment", "model": "Howitzers"},
        {"name": "2nd regiment", "model": "Some other gun, idk"}
    ]
} 
*/

export default Admin;
