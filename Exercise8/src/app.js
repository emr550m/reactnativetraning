import React, { Component } from 'react'
import { NameSurname } from "./components/namesurname";
import { InputGroup, FormControl } from "react-bootstrap";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            count: 0
        }
    }

    render() {
        return (<div style={{ marginBottom: "70px" }}>
            Hello <NameSurname Name={this.state.name} Surname={this.state.surname} itemCount={this.state.count} />

            <div style={{ padding: 10 }}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="nameid">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="nameid"
                        onChange={
                            (e) => {
                                this.setState({ name: e.target.value });
                            }
                        }
                    />
                </InputGroup>
            </div>
            <div style={{ padding: 10 }}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="surnameid">Surname</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Surname"
                        aria-label="Surname"
                        aria-describedby="surnameid"
                        onChange={
                            (e) => {
                                this.setState({ surname: e.target.value });
                            }
                        }
                    />
                </InputGroup>
            </div>
        </div>
        );
    }
}
