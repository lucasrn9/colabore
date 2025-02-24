import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import ModalActionBtn from './ModalActionBtn';
import {Text} from 'react-native';

describe('ModalActionBtn', () => {
  it('renders', () => {
    render(<ModalActionBtn />);
    const modalActionBtn = screen.getByAccessibilityHint(
      'A modal button that triggers an action',
    );
    expect(modalActionBtn).toBeVisible();
  });
  it('renders with accessibility hint provided by the user', () => {
    render(<ModalActionBtn accessibilityHint="testAccessibilityHint" />);
    const modalActionBtn = screen.getByAccessibilityHint(
      'testAccessibilityHint',
    );
    expect(modalActionBtn).toBeVisible();
  });
  it('renders the children element passed by props', () => {
    render(
      <ModalActionBtn>
        <Text>test</Text>
      </ModalActionBtn>,
    );
    const childElement = screen.getByText('test');
    expect(childElement).toBeVisible();
  });
  it('renders the custom styles', () => {
    render(
      <ModalActionBtn style={{backgroundColor: 'red', borderRadius: 0}} />,
    );
    const modalActionBtn = screen.getByAccessibilityHint(
      'A modal button that triggers an action',
    );
    expect(modalActionBtn).toHaveStyle({
      backgroundColor: 'red',
      borderRadius: 0,
    });
  });
  it('when pressed 1x, triggers the onPress function 1x', async () => {
    const user = userEvent.setup();
    const onPressMock = jest.fn();
    render(<ModalActionBtn onPress={onPressMock} />);
    const modalActionBtn = screen.getByAccessibilityHint(
      'A modal button that triggers an action',
    );
    await user.press(modalActionBtn);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
