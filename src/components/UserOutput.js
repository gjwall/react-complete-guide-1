import React from 'react';

const UserOutput = (props) => {

    const style = {
        backgroundColor: 'red'
    };

    return (
        <div>
            <p>Some text</p>
            <p style={style}>User name = {props.name}</p>
        </div>
    );
}

export { UserOutput as default };