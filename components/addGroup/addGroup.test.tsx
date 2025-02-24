import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import AddGroup from './AddGroup';

describe('AddGroup', () => {
  it('should render the add group button', () => {
    render(<AddGroup />);
    const addGroupBtn = screen.getByAccessibilityHint(
      'Opens the add group modal',
    );
    expect(addGroupBtn).toBeVisible();
  });
  it('should not render the add group modal initially', () => {
    render(<AddGroup />);
    const addGroupModal = screen.queryByAccessibilityHint(
      'A modal that show options to create or to join a group',
    );
    expect(addGroupModal).not.toBeVisible();
  });
  it('should not render the join group modal initially', () => {
    render(<AddGroup />);
    const joinGroupModal = screen.queryByAccessibilityHint(
      'A modal that allows you to join a group',
    );
    expect(joinGroupModal).not.toBeVisible();
  });
  it('when the add group button is pressed for the first time, it should render the add group modal and its buttons', async () => {
    const user = userEvent.setup();
    render(<AddGroup />);
    const addGroupBtn = screen.getByAccessibilityHint(
      'Opens the add group modal',
    );
    await user.press(addGroupBtn);
    const addGroupModal = screen.getByAccessibilityHint(
      'A modal that show options to create or to join a group',
    );
    const createGroupBtn = screen.getByAccessibilityHint(
      'A button that displays the group creation screen',
    );
    const joinGroupBtn = screen.getByAccessibilityHint(
      'A button that displays the join group modal',
    );
    expect(addGroupModal).toBeVisible();
    expect(createGroupBtn).toBeVisible();
    expect(joinGroupBtn).toBeVisible();
  });
  it('should render the join group modal when the join group button is pressed', async () => {
    const user = userEvent.setup();
    render(<AddGroup />);
    const addGroupBtn = screen.getByAccessibilityHint(
      'Opens the add group modal',
    );
    await user.press(addGroupBtn);
    const joinGroupBtn = screen.getByAccessibilityHint(
      'A button that displays the join group modal',
    );
    await user.press(joinGroupBtn);
    const joinGroupModal = screen.getByAccessibilityHint(
      'A modal that allows you to join a group',
    );
    expect(joinGroupModal).toBeVisible();
  });
  it('should render the text the user has input in the group code text input on join group modal', async () => {
    const user = userEvent.setup();
    render(<AddGroup />);
    const addGroupBtn = screen.getByAccessibilityHint(
      'Opens the add group modal',
    );
    await user.press(addGroupBtn);
    const joinGroupBtn = screen.getByAccessibilityHint(
      'A button that displays the join group modal',
    );
    await user.press(joinGroupBtn);
    const groupCodeInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    expect(groupCodeInput).toBeVisible();
    await user.type(groupCodeInput, 'group code input test');
    expect(groupCodeInput).toHaveDisplayValue('group code input test');
  });
  it('if the join group modal is open, when the add group button is pressed again, it should hide the modal', async () => {
    const user = userEvent.setup();
    render(<AddGroup />);
    const addGroupBtn = screen.getByAccessibilityHint(
      'Opens the add group modal',
    );
    await user.press(addGroupBtn);
    const addGroupModal = screen.getByAccessibilityHint(
      'A modal that show options to create or to join a group',
    );
    expect(addGroupModal).toBeVisible();
    await user.press(addGroupBtn);
    expect(addGroupModal).not.toBeVisible();
  });
  it('if the add group modal is open, when the add group button is pressed again, it should hide the modal', async () => {
    const user = userEvent.setup();
    render(<AddGroup />);
    const addGroupBtn = screen.getByAccessibilityHint(
      'Opens the add group modal',
    );
    await user.press(addGroupBtn);
    const joinGroupBtn = screen.getByAccessibilityHint(
      'A button that displays the join group modal',
    );
    await user.press(joinGroupBtn);
    const joinGroupModal = screen.getByAccessibilityHint(
      'A modal that allows you to join a group',
    );
    expect(joinGroupModal).toBeVisible();
    await user.press(addGroupBtn);
    expect(joinGroupModal).not.toBeVisible();
  });
});
