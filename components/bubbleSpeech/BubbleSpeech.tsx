import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import Polygon from '../../assets/shapes/polygon.svg';

interface BubbleSpeechProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  containerMargins?: {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
  };
}

function BubbleSpeech({
  style,
  children,
  containerMargins,
  ...rest
}: BubbleSpeechProps) {
  const flatStyle = StyleSheet.flatten(style);
  return (
    <View
      {...rest}
      style={[styles.container, containerMargins]}
      accessibilityLabel="bubble-speech-container">
      <Polygon
        fill={
          flatStyle?.backgroundColor
            ? flatStyle.backgroundColor
            : styles.bubble.backgroundColor
        }
        style={[styles.polygon]}
        accessibilityLabel="bubble-speech-polygon"
      />
      <View
        style={[styles.bubble, style]}
        accessibilityLabel="bubble-speech-bubble">
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  bubble: {
    width: 232,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  polygon: {position: 'relative', left: 4},
});

export default BubbleSpeech;
