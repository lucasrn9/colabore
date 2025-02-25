import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface SolidButtonProps extends PressableProps {
  text?: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

function SolidButton({style, text, styleText, ...rest}: SolidButtonProps) {
  return (
    <Pressable
      style={[styles.button, style]}
      accessibilityLabel="A button"
      accessibilityHint="A button"
      {...rest}>
      <Text style={[styles.text, styleText]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    borderRadius: 7,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  text: {
    fontSize: 19.5,
    fontFamily: 'Inter_24pt-Bold',
    color: '#ffffff',
    lineHeight: 23,
  },
});

export default SolidButton;
