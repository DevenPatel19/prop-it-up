import React from 'react';

const PersonCardComponent = props => {
    return (
        <div>
            <h2>{props.firstname} {props.lastname}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.haircolor}</p>
        </div>
    )
}

export default PersonCardComponent