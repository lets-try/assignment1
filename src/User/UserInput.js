import React from 'react';

const UserInput = (props) => {
    return (
    <input style={props.style} type= 'text' onChange= {props.handleChange}  value= {props.username} ></input>
    );
}

export default UserInput;