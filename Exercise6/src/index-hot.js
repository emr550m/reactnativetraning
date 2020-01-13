import React, { Component } from 'react';
import ReactDOM from 'react-dom' 
import { App } from "./app"; 
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer><Component /></AppContainer>,
        document.getElementById('app-root'),
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./app', () => { render(App) })
}