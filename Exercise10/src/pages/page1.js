
import React, { Component, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { withRouter, useHistory } from "react-router";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export function Page1(props) {

    const page1 = useSelector(state => state.page1);
    const dispatch = useDispatch()
    const history = useHistory();

    return (<div>page 1 -> Global State Var1: {page1.page1Var1}
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
                            dispatch({ type: "SET_PAGE1_VAR1", page1Var1: e.target.value });
                        }
                    }

                    value={page1.page1Var1}
                />
            </InputGroup>
            <Button onClick={
                () => {
                    history.push("page2");
                }
            }>GotoPage 2</Button>
        </div>
    </div>)
}
