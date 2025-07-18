import React from 'react';
import {View} from 'react-native';
import GroupHeader from '../../components/groupHeader/GroupHeader';
import GroupEvent from '../../components/groupEvent/GroupEvent';

function GroupEvents() {
  return (
    <View>
      <GroupHeader groupName="Group Name" />
      <GroupEvent
        username="Memphis Depay"
        email="memphis@colabore.com"
        event="Finished the Task: Task Name"
      />
    </View>
  );
}
export default GroupEvents;
