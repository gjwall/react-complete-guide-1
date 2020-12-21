import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInput from './UserInput';
import userEvent from '@testing-library/user-event';

let name, nameChanged, userInput;
beforeEach( () => {
    name = 'Bob';
    nameChanged = jest.fn();
    userInput = render(<UserInput name={name} changed={nameChanged} />);
});

test('That UserInput renders correctly', () => {
    expect(userInput).toMatchSnapshot();
});

/*
test('That UserInput is updated correctly', () => {
    screen.debug();
    //const input = screen.getByLabelText(/nameInput/i);
    //userOutput.find('input').prop('onChange')('GJW');
    //expect(nameChanged).toHaveBeenLastCalledWith('GJW');
    // const input = screen.getByAltText('input');
    // userEvent.clear(input);
    // userEvent.type(input, 'Debbie');
    // screen.debug();
    // expect(input).toHaveValue('Debbie');
    //userEvent.type(screen.getByAltText('input'), 'Debbie');
    const inputControl = screen.getByAltText('input');
    //const inputControl = screen.getByLabelText('the');
    //console.log(inputControl);
    userEvent.clear(inputControl);
    screen.debug();
    //userEvent.type(inputControl, );
});
//*/