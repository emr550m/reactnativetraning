
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export class Page1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return <div>page 1 -> Global State Var1: {this.props.page1Var1}

            <div style={{ padding: 10 }}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="nameid">Update Var1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="nameid"
                        onChange={
                            (e) => {
                                this.props.setVar1(e.target.value);
                            }
                        }

                        value={this.props.page1Var1}
                    />
                </InputGroup>
                <Button onClick={
                    () => {
                        this.props.history.push("page2");
                    }
                }>GotoPage 2</Button>
            </div>
        </div>
    }
}

const mapDispatchToProps = dispatch => ({
    setVar1: page1Var1 => dispatch({ type: "SET_PAGE1_VAR1", page1Var1 }),
    setVar2: page1Var2 => dispatch({ type: "SET_PAGE1_VAR2", page1Var2 }),
})

const mapStateToProps = (state) => {
    const { page1, page2 } = state
    return { page1Var1: page1.page1Var1, page1Var2: page1.page1Var2 }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page1));
