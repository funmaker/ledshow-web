import "core-js/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./client/App";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.hydrate(<App />, document.getElementById('root'));
