import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import PeopleSvg from '../../assets/images/People.svg';

interface GroupHeaderPhotoProps extends ViewProps {
  imageSource?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

function GroupHeaderPhoto({
  imageSource,
  style,
  ...rest
}: GroupHeaderPhotoProps) {
  return (
    <View {...rest} style={[styles.container, style]}>
      {imageSource ? (
        <Image source={imageSource} style={styles.image} />
      ) : (
        <PeopleSvg width={26} height={29} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 49,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 11,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 26, height: 29},
});

export default GroupHeaderPhoto;
