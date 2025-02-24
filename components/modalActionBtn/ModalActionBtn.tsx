import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface ModalActionBtnProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  children?: React.JSX.Element | React.JSX.Element[];
}

function ModalActionBtn({children, style, ...rest}: ModalActionBtnProps) {
  return (
    <Pressable
      accessibilityLabel="A modal action button"
      accessibilityHint="A modal button that triggers an action"
      {...rest}
      style={[styles.button, style]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 13,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});

export default ModalActionBtn;
