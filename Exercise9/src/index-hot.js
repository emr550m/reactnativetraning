import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from "./app";
import { store } from "./state/store"
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer><Provider store={store}>   <Component />  </Provider></AppContainer>,
        document.getElementById('app-root'),
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./app', () => { render(App) })
}