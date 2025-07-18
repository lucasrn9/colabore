import React from 'react';
import {render, screen} from '@testing-library/react-native';
import GroupEvent from './GroupEvent';

describe('GroupEvent Component', () => {
  it('renders correctly with provided props', () => {
    render(
      <GroupEvent
        username="John Doe"
        email="john@doeemail.com"
        event="Finished the Task: Test task"
      />,
    );
    const userName = screen.getByText('John Doe');
    const email = screen.getByText('john@doeemail.com');
    const event = screen.getByText('Finished the Task: Test task');
    expect(userName).toBeVisible();
    expect(email).toBeVisible();
    expect(event).toBeVisible();
  });
});
