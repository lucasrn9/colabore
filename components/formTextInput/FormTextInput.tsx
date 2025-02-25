import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

interface FormTextInputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
}

function FormTextInput({style, ...rest}: FormTextInputProps) {
  return (
    <TextInput
      accessibilityLabel="Text input"
      accessibilityHint="Type text here"
      placeholderTextColor="#ffffff"
      placeholder="Default Text"
      {...rest}
      style={[styles.textInput, style]}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#000000',
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 3,
    fontSize: 14,
    fontFamily: 'Inter_24pt-Regular',
    color: '#ffffff',
  },
});

export default FormTextInput;
