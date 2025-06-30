import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GroupHeaderPhoto from '../groupHeaderPhoto/GroupHeaderPhoto';

function GroupHeader() {
  return (
    <View style={styles.container}>
      <GroupHeaderPhoto />
      <Text style={styles.groupName}>Group Name</Text>
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
