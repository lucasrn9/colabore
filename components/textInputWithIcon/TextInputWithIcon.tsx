import React, {ReactElement} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface TextInputWithIconProps extends TextInputProps {
  children?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
}

function TextInputWithIcon({
  children,
  containerStyle,
  inputStyle,
  ...rest
}: TextInputWithIconProps) {
  const [iconVisible, setIconVisible] = React.useState(true);
  const iconVisibility = iconVisible ? null : styles.hide;
  const showInputIcon = () => {
    setIconVisible(true);
  };
  const hideInputIcon = () => {
    setIconVisible(false);
  };
  return (
    <View
      style={[styles.container, containerStyle]}
      accessibilityLabel="Text input border"
      accessibilityHint="The border that surrounds a text input">
      <View style={[iconVisibility]}>{children}</View>
      <TextInput
        placeholderTextColor="#ffffff"
        autoComplete="off"
        autoCorrect={false}
        multiline={true}
        numberOfLines={1}
        onFocus={() => hideInputIcon()}
        onBlur={() => showInputIcon()}
        accessibilityLabel="Text input"
        accessibilityHint="A text input"
        {...rest}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 7,
    gap: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 20,
    color: '#ffffff',
    borderRadius: 13,
    flexShrink: 1,
  },
  hide: {display: 'none'},
});

export default TextInputWithIcon;
