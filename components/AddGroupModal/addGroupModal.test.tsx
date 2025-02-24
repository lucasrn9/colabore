import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import AddGroupModal from './AddGroupModal';

describe('AddGroupModal', () => {
  it('should be visible when the visible property is true', () => {
    render(<AddGroupModal visible />);
    const modal = screen.getByAccessibilityHint(
      'A modal that show options to create or to join a group',
    );
    expect(modal).toBeVisible();
  });
  it('should renders with custom accessibility hint', () => {
    render(<AddGroupModal visible accessibilityHint="AddgroupModal test" />);
    const modal = screen.getByAccessibilityHint('AddgroupModal test');
    expect(modal).toBeVisible();
  });
  it('should not be visible when the visible property is false', () => {
    render(<AddGroupModal visible={false} />);
    const modal = screen.queryByAccessibilityHint(
      'A modal that show options to create or to join a group',
    );
    expect(modal).not.toBeVisible();
  });
  it('render the custom styles', () => {
    render(
      <AddGroupModal
        visible
        style={{backgroundColor: 'red', borderRadius: 0}}
      />,
    );
    const modal = screen.getByAccessibilityHint(
      'A modal that show options to create or to join a group',
    );
    expect(modal).toHaveStyle({backgroundColor: 'red', borderRadius: 0});
  });
  it('should render the create group button', () => {
    render(<AddGroupModal visible />);
    const createGroupButton = screen.getByAccessibilityHint(
      'A button that displays the group creation screen',
    );
    expect(createGroupButton).toBeVisible();
  });
  it('should render the join group button', () => {
    render(<AddGroupModal visible />);
    const joinGroupButton = screen.getByAccessibilityHint(
      'A button that displays the join group modal',
    );
    expect(joinGroupButton).toBeVisible();
  });
  it('should call the function showJoinGroupModal when the join group button is pressed', async () => {
    const user = userEvent.setup();
    const showJoinGroup = jest.fn();
    render(<AddGroupModal visible showJoinGroupModal={showJoinGroup} />);
    const joinGroupButton = screen.getByAccessibilityHint(
      'A button that displays the join group modal',
    );
    await user.press(joinGroupButton);
    expect(showJoinGroup).toHaveBeenCalledTimes(1);
  });
});
