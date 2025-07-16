import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserIcon from '../../assets/images/User-Icon.svg';

function UserPhoto() {
  return (
    <View style={[styles.container]}>
      <UserIcon width={31} height={31} />
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
});

export default UserPhoto;
