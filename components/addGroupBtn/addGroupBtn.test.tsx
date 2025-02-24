import React from 'react';
import {render, screen, userEvent} from '@testing-library/react-native';
import AddGroupBtn from './AddGroupBtn';

describe('addGroupBtn', () => {
  it('should render', () => {
    render(<AddGroupBtn />);
    const addGroupBtn = screen.getByAccessibilityHint('Add group button');
    expect(addGroupBtn).toBeVisible();
  });
  it('should with custom accessibility hint', () => {
    render(<AddGroupBtn accessibilityHint="AddGroupBtn test" />);
    const addGroupBtn = screen.getByAccessibilityHint('AddGroupBtn test');
    expect(addGroupBtn).toBeVisible();
  });
  it('should render the icon', () => {
    render(<AddGroupBtn />);
    const plusIcon = screen.getByAccessibilityHint('Plus icon');
    expect(plusIcon).toBeVisible();
  });
  it('should render with the correct styles', () => {
    render(<AddGroupBtn style={{width: 53, height: 53}} />);
    const addGroupBtn = screen.getByAccessibilityHint('Add group button');
    expect(addGroupBtn).toHaveStyle({width: 53, height: 53});
  });
  it('should call the onPress function when pressed', async () => {
    const user = userEvent.setup();
    const onPress = jest.fn();
    render(<AddGroupBtn onPress={onPress} />);
    const addGroupBtn = screen.getByAccessibilityHint('Add group button');
    await user.press(addGroupBtn);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
