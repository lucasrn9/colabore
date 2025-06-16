import React from 'react';
import {render, screen} from '@testing-library/react-native';
import GroupPreview from './GroupPreview';

describe('groupPreview', () => {
  it('should render correctly', () => {
    render(
      <GroupPreview
        groupName="Test Group"
        activity="Test Activity"
        date="1/1/2025 - 12:00"
        photo={require('../../assets/images/People.png')}
      />,
    );
    const groupPreview = screen.getByLabelText('Group Preview');
    expect(groupPreview).toBeVisible();
  });
  it('should display the group information', () => {
    render(
      <GroupPreview
        groupName="Test Group"
        activity="Test Activity"
        date="1/1/2025 - 12:00"
        photo={require('../../assets/images/People.png')}
      />,
    );
    const groupName = screen.getByText('Test Group');
    const activity = screen.getByText('Test Activity');
    const date = screen.getByText('1/1/2025 - 12:00');
    const image = screen.getByLabelText('Group image preview');
    expect(image).toBeVisible();
    expect(groupName).toBeVisible();
    expect(activity).toBeVisible();
    expect(date).toBeVisible();
  });
});
