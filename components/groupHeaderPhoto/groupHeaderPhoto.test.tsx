import React from 'react';
import {render, screen} from '@testing-library/react-native';
import GroupHeaderPhoto from './GroupHeaderPhoto';

describe('GroupHeaderPhoto', () => {
  it('renders correctly with default image when no image source is provided', () => {
    render(<GroupHeaderPhoto />);
    const defaultImage = screen.getByLabelText('Group Header Default Image');
    expect(defaultImage).toBeVisible();
  });

  it('renders correctly with provided image source', () => {
    const testImage = require('../../assets/images/People.png');
    render(<GroupHeaderPhoto imageSource={testImage} />);
    const groupHeaderImage = screen.getByLabelText('Group Header Image');
    console.log(groupHeaderImage.props.source.testUri);
    expect(groupHeaderImage).toBeVisible();
    expect(groupHeaderImage.props.source).toEqual(testImage);
  });
});
