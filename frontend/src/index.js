import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    React.createElement(
        BrowserRouter,
        null,
        React.createElement(App)
    )
), document.getElementById('root'));
registerServiceWorker();
