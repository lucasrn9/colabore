import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import People from '../../assets/images/People.svg';

interface AddPhotoProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}

function AddPhoto({style, ...rest}: AddPhotoProps) {
  return (
    <Pressable
      style={[styles.container, style]}
      {...rest}
      accessibilityLabel="Add photo button"
      accessibilityHint="A button to add a photo">
      <People
        width={84}
        height={84}
        accessibilityLabel="Icon of a group of people"
        accessibilityHint="Icon of a group of people"
      />
      <Text style={[styles.text]}>Add photo</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    width: 170,
    height: 170,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  text: {fontFamily: 'Inter_24pt-Regular', fontSize: 15},
});

export default AddPhoto;
