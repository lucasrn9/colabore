import React from 'react';
import {render, screen} from '@testing-library/react-native';
import OutlineButton from './OutlineButton';

describe('OutlineButton Component', () => {
  it('renders correctly with title', () => {
    render(<OutlineButton title="Click Me" />);
    expect(screen.getByText('Click Me')).toBeVisible();
  });
});
