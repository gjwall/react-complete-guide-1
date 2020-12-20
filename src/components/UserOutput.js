import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>User name = {props.name}</p>
        </div>
    );
}

export { UserOutput as default};