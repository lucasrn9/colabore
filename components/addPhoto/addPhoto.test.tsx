import React from 'react';
import {render, screen} from '@testing-library/react-native';
import AddPhoto from './AddPhoto';

describe('AddPhoto', () => {
  it('should render', () => {
    render(<AddPhoto />);
    const addPhoto = screen.getByAccessibilityHint('A button to add a photo');
    expect(addPhoto).toBeVisible();
  });
  it('should render the svg photo', () => {
    render(<AddPhoto />);
    const svgPhoto = screen.getByAccessibilityHint('Icon of a group of people');
    expect(svgPhoto).toBeVisible();
  });
  it('should render the text', () => {
    render(<AddPhoto />);
    const text = screen.getByText('Add photo');
    expect(text).toBeVisible();
  });
  it('should render the custom styles', () => {
    render(<AddPhoto style={{backgroundColor: 'red', borderRadius: 0}} />);
    const addPhoto = screen.getByAccessibilityHint('A button to add a photo');
    expect(addPhoto).toHaveStyle({backgroundColor: 'red', borderRadius: 0});
  });
});
