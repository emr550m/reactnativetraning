
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from "react-bootstrap";

export class NameSurname extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            count: 0
        }
    }
    componentWillUnmount() {
        console.log("timer clear");
        clearInterval(this.timer);
    }
    componentDidMount() {
        console.log("timer setup")
        this.timer = setInterval(() => {
            console.log("timer tick:" + (this.state.count + 1) );
            this.setState({ count: this.state.count + 1 })
        }, 1000);
    }
    render() {
        return <Button variant="primary">
            {this.props.Name} {this.props.Surname} <Badge variant="light">{this.state.count}</Badge>
        </Button>
    }
}

NameSurname.propTypes = {
    Name: PropTypes.string.isRequired,
    Surname: PropTypes.string.isRequired,
    itemCount: PropTypes.number.isRequired
}

NameSurname.defaultProps = {
    Name: "Your",
    Surname: "Name",
    itemCount: 0
};