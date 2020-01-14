import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 

import {Page1} from "./pages/page1";
import {Page2} from "./pages/page2";

export function App(){
   
        return (
            <Router>
                <div style={{ marginBottom: "70px" }}>
                    <Switch>
                        <Route path="/page1">
                            <Page1 />
                        </Route> 
                        <Route path="/page2">
                            <Page2 />
                        </Route>
                        <Route path="/">
                            <Page1 />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
 
}