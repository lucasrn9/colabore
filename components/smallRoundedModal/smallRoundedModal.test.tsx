import React from 'react';
import SmallRoundedModal from './SmallRoundedModal';
import {render, screen} from '@testing-library/react-native';

describe('SmallRoundedModal', () => {
  it('is visible when the visible prop is true', () => {
    render(<SmallRoundedModal visible />);
    const modal = screen.getByAccessibilityHint('A modal');
    expect(modal).toBeVisible();
  });
  it('is not visible when the visible prop is false', () => {
    render(<SmallRoundedModal visible={false} />);
    const modal = screen.queryByAccessibilityHint('A modal');
    expect(modal).not.toBeVisible();
  });
  it('render with custom styles', () => {
    render(
      <SmallRoundedModal
        visible
        style={{backgroundColor: 'red', borderRadius: 0}}
      />,
    );
    const modal = screen.getByAccessibilityHint('A modal');
    expect(modal).toHaveStyle({backgroundColor: 'red', borderRadius: 0});
  });
  it('render with custom accessibility hint', () => {
    render(<SmallRoundedModal visible accessibilityHint="modal test" />);
    const modal = screen.getByAccessibilityHint('modal test');
    expect(modal).toBeVisible();
  });
});
