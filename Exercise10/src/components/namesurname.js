
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from "react-bootstrap";

export function NameSurname(props) { 
    const [count, setCount] = useState(0);

    useEffect(() => {
        window.document.title="Mount - " + count; 
        return () => {
            window.document.title="Un-Mount - " + count;
        }
    }, [count]);

    return (<Button variant="primary" onClick={(e) => {
        setCount(count + 1);
    }}>
        {props.Name} {props.Surname} <Badge variant="light">{count}</Badge>
    </Button>)

}