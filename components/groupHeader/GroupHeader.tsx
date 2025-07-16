import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
} from 'react-native';
import GroupHeaderPhoto from '../groupHeaderPhoto/GroupHeaderPhoto';

interface GroupHeaderProps {
  groupName: string;
  groupPhoto?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

function GroupHeader({groupPhoto, groupName}: GroupHeaderProps) {
  return (
    <View style={styles.container} accessibilityHint="Group Header">
      <GroupHeaderPhoto imageSource={groupPhoto} />
      <Text style={styles.groupName}>{groupName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupName: {marginLeft: 21, fontFamily: 'Inter_24pt-Medium', fontSize: 17},
});

export default GroupHeader;
