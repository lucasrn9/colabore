import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Header from './header';

describe('Header', () => {
  it('renders', () => {
    render(<Header />);
    const header = screen.getByAccessibilityHint('The page main header');
    expect(header).toBeVisible();
  });
  it('renders with the user provided accessibility hint', () => {
    render(<Header accessibilityHint="header test" />);
    const header = screen.getByAccessibilityHint('header test');
    expect(header).toBeVisible();
  });
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByText('Colabore');
    expect(logo).toBeVisible();
  });
  it('renders the profile picture in the correct position', () => {
    render(<Header />);
    const profilePicture = screen.getByA11yHint('Opens user profile options');
    expect(profilePicture).toBeVisible();
    expect(profilePicture).toHaveStyle({right: 15});
  });
});
