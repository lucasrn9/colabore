import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import UserIcon from '../.././assets/images/User-Icon.svg';

interface HeaderProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
}

function Header({style, ...rest}: HeaderProps) {
  return (
    <View
      accessibilityLabel="Header"
      accessibilityHint="The page main header"
      {...rest}
      style={[styles.header, style]}>
      <Text style={styles.logo}>Colabore</Text>
      <View
        style={styles.profilePictureContainer}
        accessibilityLabel="profile picture"
        accessibilityHint="Opens user profile options">
        <UserIcon width={36} height={36} transform={[{translateX: '3%'}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
<<<<<<< HEAD
=======
    marginBottom: 35,
>>>>>>> dev
  },
  logo: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 38,
  },
  profilePictureContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    overflow: 'hidden',
    backgroundColor: '#D9D9D9',
  },
});

export default Header;
