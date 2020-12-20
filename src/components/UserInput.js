import React from 'react';
import UserOutput from './UserOutput';

const UserInput = () => {
    return (
        <div>
            <input type="text"></input>
            <UserOutput name="Bob" /> 
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </div>
    );
};

export { UserInput as default} ;