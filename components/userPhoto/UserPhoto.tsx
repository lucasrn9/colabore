import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import UserIcon from '../../assets/images/User-Icon.svg';

interface UserPhotoProps extends ViewProps {
  photo?: ImageSourcePropType | undefined;
}

function UserPhoto({photo, ...rest}: UserPhotoProps) {
  return (
    <View {...rest} style={[styles.container]}>
      {photo ? (
        <Image
          source={photo}
          style={styles.image}
          accessibilityLabel="user photo"
        />
      ) : (
        <UserIcon
          width={31}
          height={31}
          accessibilityLabel="user default photo"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 41,
    height: 41,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 41, height: 41, borderRadius: 50},
});

export default UserPhoto;
