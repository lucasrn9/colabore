import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserPhoto from '../../components/userPhoto/UserPhoto';
import BubbleSpeech from '../../components/bubbleSpeech/BubbleSpeech';
import OutlineButton from '../outlineButton/OutlineButton';

interface GroupEventProps {
  username: string;
  email: string;
  event: string;
}

function GroupEvent({username, email, event}: GroupEventProps) {
  return (
    <View style={[styles.container]}>
      <UserPhoto />
      <BubbleSpeech containerMargins={styles.bubble}>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.event}>{event}</Text>
        <OutlineButton title="View Attachments" />
      </BubbleSpeech>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 21},
  bubble: {marginLeft: 9, marginTop: 7},
  userName: {
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 13,
    textTransform: 'capitalize',
    marginBottom: 7,
    lineHeight: 16,
  },
  email: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: 11,
    textTransform: 'lowercase',
    marginBottom: 7,
    lineHeight: 13,
  },
  event: {
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 7,
  },
});

export default GroupEvent;
