
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export class Page2 extends Component { 

    render() {
        return <div>page 2 <Button onClick={
                () => {
                    this.props.history.push("page1");
                }
            }>GotoPage 1</Button>
        </div>
    }
} 

const mapDispatchToProps = dispatch => ({
    setVar1: page2Var1 => dispatch({ type: "SET_PAGE2_VAR1", page2Var1 }),
    setVar2: page2Var2 => dispatch({ type: "SET_PAGE2_VAR2", page2Var2 }),
})

const mapStateToProps = (state) => {
    const { page1, page2 } = state
    return { page2Var1: page2.page2Var1, page2Var2: page2.page2Var2 }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page2));