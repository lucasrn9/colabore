import React from 'react';
import {View} from 'react-native';
import GroupHeader from '../../components/groupHeader/GroupHeader';
import UserPhoto from '../../components/userPhoto/UserPhoto';
import BubbleSpeech from '../../components/bubbleSpeech/BubbleSpeech';

function GroupEvents() {
  return (
    <View>
      <GroupHeader groupName="Group Name" />
      <UserPhoto />
      <BubbleSpeech />
    </View>
  );
}
export default GroupEvents;
