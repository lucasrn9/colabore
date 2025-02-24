import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface FilledBtnProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  children?: React.JSX.Element | React.JSX.Element[];
}

function FilledBtn({children, style, ...rest}: FilledBtnProps) {
  return (
    <Pressable
      accessibilityLabel="button"
      accessibilityHint="A button"
      {...rest}
      style={[styles.filledBtn, style]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  filledBtn: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 9,
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
});

export default FilledBtn;
