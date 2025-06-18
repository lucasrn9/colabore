import React from 'react';
import {
  Image,
  ImageProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface ImagePreviewProps extends ViewProps {
  children?: React.ReactElement<ImageProps, typeof Image>;
  style?: StyleProp<ViewStyle>;
}

function ImagePreview({style, children, ...rest}: ImagePreviewProps) {
  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 61,
    height: 61,
    borderRadius: 100,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default ImagePreview;
