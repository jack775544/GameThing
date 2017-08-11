import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Util from './Util.js';

import Separator from './components/Separator.jsx';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.store = window.localStorage;
        let saveState = this.store.getItem("adminState");
        this.state = saveState !== null ? JSON.parse(saveState) : {
            "unit": "The thingo brigade",
            "subunits": "1st regiment\n2nd regiment\n3rd regiment",
            "theatre": "West Germany",
            "date": "1984-03-18",
            "time": "1300",
            "weather": "Foggy",
            "viewDistance": "200m",
            "conditions": "rainy",
            "air": "1st Squad: MIG\n2nd Squad: MIG21\n3rd Squad: Some Other plane",
            "artillery": "1st regiment: Howitzers\n2nd regiment: Some other gun idk",
            "sendTime": false
        }
    }

    componentDidUpdate = () => {
        this.store.setItem("adminState", JSON.stringify(this.state));
    }

    handleSave = (e) => {
        alert("Saving is not done yet");
    }

    handleSend = (e) => {
        let air;
        let artillery;

        try {
            air = this.state.air.trim().split("\n").map(function (e) {
                let c = e.split(":");
                return { name: c[0].trim(), model: c[1].trim() };
            });
        } catch (ex) {
            let message = "The air textbox is incorrectly formatted";
            console.log(message);
            alert(message);
            return;
        }

        try {
            artillery = this.state.artillery.trim().split("\n").map(function (e) {
                let c = e.split(":");
                return { name: c[0].trim(), model: c[1].trim() };
            });
        } catch (ex) {
            let message = "The artillery textbox is incorrectly formatted";
            console.log(message);
            alert(message);
            return;
        }

        let sendState = {
            "unit": this.state.unit,
            "subunits": this.state.subunits.split("\n"),
            "theatre": this.state.theatre,
            "weather": this.state.weather,
            "viewDistance": this.state.viewDistance,
            "conditions": this.state.conditions,
            "air": air,
            "artillery": artillery
        }
        console.log(sendState);
        console.log(JSON.stringify(sendState));

        axios.post('/api/update', sendState).then(() => alert("Update Sent"));
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTimeInput = (e) => {
        const target = e.target;
        const value = target.checked;
        this.setState({
            "sendTime": value
        });
    }

    printState = () => {
        window.a = this.state;
        console.log(this.state);
    }

    updateTime = () => {
        let timeState = {
            "time": parseInt(this.state.time, 10),
            "date": this.state.date
        }

        // Either invalid date, not a number for time or invalid time
        if (!Util.validateDate(timeState.date) || !Util.isPositiveInteger(timeState.time) || timeState.time > 2399 || timeState.time < 0) {
            alert("Invalid date or time");
            return;
        }

        axios.post('/api/time/update', timeState).then(() => alert("Time and Date Updated"));
    }

    pauseTime = () => {
        axios.post('/api/time/pause').then(() => alert("Time is now paused"));
    }
    
    startTime = () => {
        axios.post('/api/time/start').then(() => alert("Time is now restarted"));
    }

    render() {
        return (
            <div>
                <h1>Admin Interface</h1>
                <div className="admin admin-box">
                    <Separator />
                    <h2>Unit: </h2>
                    <input onChange={this.handleInputChange} value={this.state.unit} type="text" id="unit" name="unit" /><br />
                    <h2>Subunits: </h2>
                    <p>Put each new subunit on a new line</p>
                    <textarea onChange={this.handleInputChange} value={this.state.subunits} id="subunits" name="subunits" ></textarea>
                    <Separator />
                    <h2>Theatre: </h2>
                    <input onChange={this.handleInputChange} value={this.state.theatre} type="text" id="theatre" name="theatre" /><br />
                    <Separator />
                    <h2>weather: </h2>
                    <input onChange={this.handleInputChange} value={this.state.weather} type="text" id="weather" name="weather" /><br />
                    <h2>viewDistance: </h2>
                    <input onChange={this.handleInputChange} value={this.state.viewDistance} type="text" id="viewDistance" name="viewDistance" /><br />
                    <h2>conditions: </h2>
                    <input onChange={this.handleInputChange} value={this.state.conditions} type="text" id="conditions" name="conditions" /><br />
                    <Separator />
                    <h2>Air: </h2>
                    <p>Place the squad and model comma separated. New squads go on new lines</p>
                    <textarea onChange={this.handleInputChange} value={this.state.air} id="air" name="air" ></textarea>
                    <Separator />
                    <h2>Artillery: </h2>
                    <p>Place the division and model comma separated. New squads go on new lines</p>
                    <textarea onChange={this.handleInputChange} value={this.state.artillery} id="artillery" name="artillery"></textarea>
                    <Separator />
                </div>

                <button onClick={this.handleSave}>Save Config</button>
                <button onClick={this.handleSend}>Send Config</button>
                <button onClick={this.printState}>Print State</button>

                <div className="admin-box">
                    <h2>Time</h2>
                    <p>Your options for time</p>
                    
                    <Separator />
                    <p>Send a new time with this option</p>
                    <h2>Date: </h2>
                    <p>A date MUST be in the format yyyy-mm-dd</p>
                    <input onChange={this.handleInputChange} value={this.state.date} type="text" id="date" name="date" /><br />
                    <h2>Time: </h2>
                    <input onChange={this.handleInputChange} value={this.state.time} type="text" id="time" name="time" /><br />
                    <button onClick={this.updateTime}>Update Time</button>

                    <Separator />
                    <p>This button pauses time. Do not give to Nazi's or those dirty reds</p>
                    <button onClick={this.pauseTime}>Pause Time</button>

                    <Separator />
                    <p>This button restarts time.</p>
                    <button onClick={this.startTime}>Restart Time</button>
                </div>

                <Link to="/">Game</Link>

                <div className="journal">
                    <p>Rap Gods Journal</p>
                    <p>Today a man with nine fingers approached me</p>
                    <p>He was from the colony and had a favour to ask</p>
                    <p>I wouldn't normally trust a convict from that wretched island, but I trusted him</p>
                    <p>Don't know why</p>
                    <p>He wanted me to call him daddy.....</p>
                </div>
            </div>
        );
    }
}

export default Admin;
