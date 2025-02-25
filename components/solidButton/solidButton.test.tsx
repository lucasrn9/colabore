import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import SolidButton from './SolidButton';

describe('SolidBtn', () => {
  it('renders', () => {
    render(<SolidButton />);
    const SolidBtn = screen.getByAccessibilityHint('A button');
    expect(SolidBtn).toBeVisible();
  });
  it('renders with custom accessibility hint', () => {
    render(<SolidButton accessibilityHint="SolidBtn test" />);
    const solidBtn = screen.getByAccessibilityHint('SolidBtn test');
    expect(solidBtn).toBeVisible();
  });
  it('renders with custom styles', () => {
    render(<SolidButton style={{backgroundColor: 'red', borderRadius: 0}} />);
    const solidBtn = screen.getByAccessibilityHint('A button');
    expect(solidBtn).toHaveStyle({backgroundColor: 'red', borderRadius: 0});
  });
  it('when pressed 1x, triggers the onPress function 1x', async () => {
    const user = userEvent.setup();
    const onPressMock = jest.fn();
    render(<SolidButton onPress={onPressMock} />);
    const solidBtn = screen.getByAccessibilityHint('A button');
    await user.press(solidBtn);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
