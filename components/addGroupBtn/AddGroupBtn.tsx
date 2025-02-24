import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import PlusBtnIcon from '../../assets/images/Plus-Btn-Icon.svg';

interface AddGroupBtnProps extends PressableProps {
  style?: Omit<StyleProp<ViewStyle>, 'width' | 'height'> & {
    width?: number;
    height?: number;
  };
}

function AddGroupBtn({style, ...rest}: AddGroupBtnProps) {
  const iconWidth = style?.width || styles.button.width;
  const iconHeight = style?.height || styles.button.height;

  return (
    <Pressable
      accessibilityLabel="Add group button"
      accessibilityHint="Add group button"
      {...rest}
      style={[styles.button, style]}>
      <PlusBtnIcon
        width={iconWidth}
        height={iconHeight}
        accessibilityLabel="Plus icon"
        accessibilityHint="Plus icon"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 53,
    height: 53,
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },
});

export default AddGroupBtn;
