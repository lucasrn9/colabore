import {render, screen} from '@testing-library/react-native';
import React from 'react';
import JoinGroupModal from './JoinGroupModal';

describe('JoinGroupModal', () => {
  it('should be visible when the visible property is true', () => {
    render(<JoinGroupModal visible />);
    const modal = screen.getByAccessibilityHint(
      'A modal that allows you to join a group',
    );
    expect(modal).toBeVisible();
  });
  it('should renders with custom accessibility hint', () => {
    render(<JoinGroupModal visible accessibilityHint="JoinGroupModal test" />);
    const modal = screen.getByAccessibilityHint('JoinGroupModal test');
    expect(modal).toBeVisible();
  });
  it('should not be visible when the visible property is false', () => {
    render(<JoinGroupModal visible={false} />);
    const modal = screen.queryByAccessibilityHint(
      'A modal that allows you to join a group',
    );
    expect(modal).not.toBeVisible();
  });
  it('render the custom styles', () => {
    render(
      <JoinGroupModal
        visible
        style={{backgroundColor: 'red', borderRadius: 0}}
      />,
    );
    const modal = screen.getByAccessibilityHint(
      'A modal that allows you to join a group',
    );
    expect(modal).toHaveStyle({backgroundColor: 'red', borderRadius: 0});
  });
  it('renders the text input with icon', () => {
    render(<JoinGroupModal visible />);
    const textInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    const icon = screen.getByAccessibilityHint(
      'The icon of a magnifying glass',
    );
    expect(textInput).toBeVisible();
    expect(icon).toBeVisible();
  });
  it('renders the ask to join button', () => {
    render(<JoinGroupModal visible />);
    const askToJoinGroup = screen.getByAccessibilityHint(
      'The button to ask to join the group you inserted the code',
    );
    expect(askToJoinGroup).toBeVisible();
  });
});
