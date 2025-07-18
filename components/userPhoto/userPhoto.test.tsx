import React from 'react';
import {render, screen} from '@testing-library/react-native';
import UserPhoto from './UserPhoto';

describe('UserPhoto Component', () => {
  it('renders correctly with a photo', () => {
    const photo = require('../../assets/images/User-Icon.png');
    render(<UserPhoto photo={photo} />);
    const userPhoto = screen.getByLabelText('user photo');
    expect(userPhoto).toBeVisible();
    expect(userPhoto.props.source).toEqual(photo);
  });

  it('renders the default icon when no photo is provided', () => {
    render(<UserPhoto />);
    const defaultPhoto = screen.getByLabelText('user default photo');
    expect(defaultPhoto).toBeVisible();
  });
});
