import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div>
                <input  
                    alt="input"
                    className="input"
                    type="text" 
                    onChange={props.changed} 
                    value={props.name}
                />
        </div>
    );
};

export { UserInput as default };