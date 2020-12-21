import React from 'react';
import { render } from '@testing-library/react';
import UserOutput from './UserOutput';

test('That UserOutput renders correctly', () => {
    const name = 'Bob';
    const userOutput = render(<UserOutput name={name} /> );
    expect(userOutput).toMatchSnapshot();
});