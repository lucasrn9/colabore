import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

interface OutlineButtonProps extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

function OutlineButton({title, style, ...rest}: OutlineButtonProps) {
  return (
    <Pressable {...rest} style={[styles.button, style]}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.3,
    borderColor: '#000000',
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    margin: 'auto',
  },
  buttonText: {fontFamily: 'Inter_18pt-Medium', fontSize: 13, lineHeight: 16},
});

export default OutlineButton;
