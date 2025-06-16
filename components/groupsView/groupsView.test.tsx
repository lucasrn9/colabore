import React from 'react';
import {render, screen} from '@testing-library/react-native';
import GroupsView from './GroupsView';

const groupsTest = [
  {
    name: 'Group Name',
    lastActivity: 'Memphis Depay finished the task: Task Name',
    lastActivityDate: '1/6/2025 - 16:13',
    photo: require('../../assets/images/People.png'),
  },
];

describe('groupsView', () => {
  it('should render correctly', () => {
    render(<GroupsView groups={groupsTest} />);
    const groupsPreview = screen.getByLabelText('A list of all your groups');
    expect(groupsPreview).toBeVisible();
  });
  it('should render group previews', () => {
    render(<GroupsView groups={groupsTest} />);
    const groupPreview = screen.getByLabelText('Group Preview');
    expect(groupPreview).toBeVisible();
  });
  it('should display group details correctly', () => {
    render(<GroupsView groups={groupsTest} />);
    const groupName = screen.getByText('Group Name');
    const lastActivity = screen.getByText(
      'Memphis Depay finished the task: Task Name',
    );
    const lastActivityDate = screen.getByText('1/6/2025 - 16:13');
    expect(groupName).toBeVisible();
    expect(lastActivity).toBeVisible();
    expect(lastActivityDate).toBeVisible();
    expect(true).toBe(true);
  });
  it('should not render group previews when no groups are provided', () => {
    render(<GroupsView groups={[]} />);
    const groupPreview = screen.queryByLabelText('Group Preview');
    expect(groupPreview).toBeNull();
  });
});
