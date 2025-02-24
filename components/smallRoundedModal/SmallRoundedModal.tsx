import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

export interface SmallRoundedModalProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.JSX.Element | React.JSX.Element[];
  visible: boolean;
}
function SmallRoundedModal({
  style,
  children,
  visible,
  ...rest
}: SmallRoundedModalProps) {
  const visibility = visible ? null : styles.hide;
  return (
    <View
      accessibilityLabel="Modal"
      accessibilityHint="A modal"
      {...rest}
      style={[styles.container, style, visibility]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingHorizontal: 21,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    borderRadius: 24,
  },
  hide: {display: 'none'},
});

export default SmallRoundedModal;
