import React from 'react';
import './User.css';

const UserOutput = (props) => {
    return (
        <div className='output'>
            <h1>{props.username}</h1>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
        </div>
    );
}

export default UserOutput;