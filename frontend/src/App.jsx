import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from './Game.jsx'
import Admin from './Admin.jsx'

import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Game} />
                <Route exact path='/admin' component={Admin} />
            </Switch>
        );
    }
}

export default App;
