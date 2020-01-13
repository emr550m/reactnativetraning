import React, { Component } from 'react'
import {NameSurname} from "./components/namesurname";

export class App extends Component
{
    render(){
        return ( <div style={{ marginBottom: "70px" }}>
                    Hello <NameSurname Name="Emrah" Surname="Öz" />
                </div> 
        );
    }
}
