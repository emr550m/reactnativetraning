import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {App} from "./app";
import {store} from "./state/store"
import 'bootstrap/dist/css/bootstrap.min.css';
 


ReactDOM.render(<Provider store={store}>   
                    <App />
                </Provider>,document.getElementById("app-root"));