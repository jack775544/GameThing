import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Order from './components/Order.jsx';
import Separator from './components/Separator.jsx';
import Status from './components/Status.jsx';
import Weather from './components/Weather.jsx';
import Support from './components/Support.jsx';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "unit": "",
            "subunits": [],
            "theatre": "",
            "date": "",
            "time": "",
            "weather": "",
            "viewDistance": "",
            "conditions": "",
            "air": [],
            "artillery": []
        }
    }

    componentDidMount() {
        let self = this;
        (function updateData() {
            axios.get('/api/state').then(function (r) {
                self.setState(r.data);
            }).then(function(){
                self.update = setTimeout(updateData, 5000);
            });
        })();
    }

    componentWillUnmount() {
        clearTimeout(this.update);
    }

    render() {
        return (
            <div>
                <header id="header">
                    <Separator />
                    <h1>Command &amp; Control OS v3.4.1</h1>
                    <Separator />
                    <p>Access Level: 4</p>
                    <p>Authorisation: Authorised</p>
                </header>
                <Status theatre={this.state.theatre} date={this.state.date} time={this.state.time} />
                <Weather forcast={this.state.weather} viewDistance={this.state.viewDistance} conditions={this.state.conditions} />
                <Order unit={this.state.unit} subunits={this.state.subunits} />
                <Support air={this.state.air} artillery={this.state.artillery} />
                <Link to="/admin">Admin</Link>
            </div>
        );
    }
}

export default Game;
