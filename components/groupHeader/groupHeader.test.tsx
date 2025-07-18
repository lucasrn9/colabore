import React from 'react';
import {render, screen} from '@testing-library/react-native';
import GroupHeader from './GroupHeader';

describe('GroupHeader', () => {
  it('renders correctly', () => {
    render(<GroupHeader groupName="Group Name" />);
    const groupHeader = screen.getByAccessibilityHint('Group Header');
    expect(groupHeader).toBeVisible();
  });

  it('renders GroupHeaderPhoto component with the default image when no photo source is provided', () => {
    render(<GroupHeader groupName="Group Name" />);
    const groupHeaderDefaultImage = screen.getByLabelText(
      'Group Header Default Image',
    );
    expect(groupHeaderDefaultImage).toBeVisible();
  });

  it('renders GroupHeaderPhoto component with the provided image', () => {
    render(
      <GroupHeader
        groupName="Group Name"
        groupPhoto={require('../../assets/images/People.png')}
      />,
    );
    const groupHeaderDefaultImage = screen.getByLabelText('Group Header Image');
    expect(groupHeaderDefaultImage).toBeVisible();
  });

  it('displays the correct group name', () => {
    render(<GroupHeader groupName="Test Group" />);
    const groupName = screen.getByText('Test Group');
    expect(groupName).toBeVisible();
  });
});
