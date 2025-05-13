import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/header/Header';
import AddGroup from '../../components/addGroup/AddGroup';
import GroupsView from '../../components/groupsView/GroupsView';

function Home() {
  const [groups, setGroups] = useState([
    {
      name: 'Group Name',
      lastActivity: 'Memphis Depay finished the task: Task Name',
      lastActivityDate: '1/6/2025 - 16:13',
      photo: require('../../assets/images/People.png'),
    },
  ]);
  const hasGroups = groups.length > 0;

  return (
    <View style={styles.container}>
      <Header />
      {hasGroups ? (
        <GroupsView groups={groups} />
      ) : (
        <Text style={styles.noGroupsText}>You have no groups yet</Text>
      )}

      <AddGroup />
    </View>
  );
}

// todo: tests, and commit

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {gap: 5},
  noGroupsText: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 15,
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{translateY: '-50%'}],
    zIndex: 9,
  },
});

export default Home;
