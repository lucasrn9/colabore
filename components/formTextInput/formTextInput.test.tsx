import React from 'react';
import {render, screen, userEvent} from '@testing-library/react-native';
import FormTextInput from './FormTextInput';

describe('FormTextInput', () => {
  it('should render the text input', () => {
    render(<FormTextInput />);
    const formTextInput = screen.getByAccessibilityHint('Type text here');
    expect(formTextInput).toBeVisible();
  });
  it('should render the text input with custom accessibility hint', () => {
    render(<FormTextInput accessibilityHint="Type your username here" />);
    const textInput = screen.getByAccessibilityHint('Type your username here');
    expect(textInput).toBeVisible();
  });
  it('should render the placeholder text', () => {
    render(<FormTextInput placeholder="testPlaceholder" />);
    const textInput = screen.getByPlaceholderText('testPlaceholder');
    expect(textInput).toBeVisible();
  });
  it('should render the input custom styles', () => {
    render(<FormTextInput style={{backgroundColor: 'red', borderRadius: 0}} />);
    const textInput = screen.getByAccessibilityHint('Type text here');
    expect(textInput).toHaveStyle({
      backgroundColor: 'red',
      borderRadius: 0,
    });
  });
  it('should render the text typed by the user', async () => {
    const user = userEvent.setup();
    const onChangeTextMock = jest.fn();
    render(<FormTextInput value="" onChangeText={onChangeTextMock} />);
    const textInput = screen.getByAccessibilityHint('Type text here');
    await user.type(textInput, 'testText');
    expect(onChangeTextMock).toHaveBeenCalledTimes(8);
    expect(onChangeTextMock).toHaveBeenLastCalledWith('t');
  });
});
