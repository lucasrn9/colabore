import React from 'react';
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react-native';
import TextInputWithIcon from './TextInputWithIcon';
import SearchIcon from '../../assets/images/Search-Icon.svg';

describe('TextInputWithIcon', () => {
  it('should render the text input', () => {
    render(<TextInputWithIcon />);
    const textInput = screen.getByAccessibilityHint('A text input');
    expect(textInput).toBeVisible();
  });
  it('should render the text input with custom accessibility hint', () => {
    render(
      <TextInputWithIcon accessibilityHint="A Text input for group code" />,
    );
    const textInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    expect(textInput).toBeVisible();
  });
  it('should render the placeholder text', () => {
    render(<TextInputWithIcon placeholder="testPlaceholder" />);
    const textInput = screen.getByPlaceholderText('testPlaceholder');
    expect(textInput).toBeVisible();
  });
  it('should render the icon', () => {
    render(
      <TextInputWithIcon>
        <SearchIcon testID="icon" />
      </TextInputWithIcon>,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toBeVisible();
  });
  it('should hide the icon when the text input has focus', async () => {
    const user = userEvent.setup();
    render(
      <TextInputWithIcon accessibilityHint="A Text input for group code">
        <SearchIcon testID="icon" />
      </TextInputWithIcon>,
    );
    const textInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    const icon = screen.getByTestId('icon');
    await user.type(textInput, '', {skipBlur: true});
    expect(icon).not.toBeVisible();
  });
  it('should show the icon back again when the text input blurs', async () => {
    const user = userEvent.setup();
    render(
      <TextInputWithIcon accessibilityHint="A Text input for group code">
        <SearchIcon testID="icon" />
      </TextInputWithIcon>,
    );
    const textInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    const icon = screen.getByTestId('icon');
    await user.type(textInput, '');
    expect(icon).toBeVisible();
  });
  it('should render the container custom styles', () => {
    render(
      <TextInputWithIcon
        containerStyle={{backgroundColor: 'red', borderRadius: 0}}
      />,
    );
    const textInputContainer = screen.getByAccessibilityHint(
      'The border that surrounds a text input',
    );
    expect(textInputContainer).toHaveStyle({
      backgroundColor: 'red',
      borderRadius: 0,
    });
  });
  it('should render the input custom styles', () => {
    render(
      <TextInputWithIcon
        accessibilityHint="A Text input for group code"
        inputStyle={{backgroundColor: 'red', borderRadius: 0}}
      />,
    );
    const textInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    expect(textInput).toHaveStyle({
      backgroundColor: 'red',
      borderRadius: 0,
    });
  });
  it('should render the text typed by the user', () => {
    const onChangeTextMock = jest.fn();
    render(
      <TextInputWithIcon
        accessibilityHint="A Text input for group code"
        value=""
        onChangeText={onChangeTextMock}
      />,
    );
    const textInput = screen.getByAccessibilityHint(
      'A Text input for group code',
    );
    fireEvent.changeText(textInput, 'testText');
    expect(onChangeTextMock).toHaveBeenCalledWith('testText');
  });
});
