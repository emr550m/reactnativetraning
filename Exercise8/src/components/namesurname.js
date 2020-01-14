
import React from 'react';
import PropTypes from 'prop-types';
import {Button,Badge} from "react-bootstrap";

export class NameSurname extends React.Component {
    render() {
        return <Button variant="primary">
            {this.props.Name} {this.props.Surname} <Badge variant="light">{this.props.itemCount}</Badge>
            <span className="sr-only">unread messages</span>
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