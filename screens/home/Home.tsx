import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/header/Header';
import AddGroup from '../../components/addGroup/AddGroup';

// todo: commit to git and github
function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.noGroupsText}>You have no groups yet</Text>
      <AddGroup />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <View style={styles.box1} />
        <View style={styles.box2} /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
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
  box1: {width: '100%', height: 100, backgroundColor: 'red'},
  box2: {width: '100%', height: 100, backgroundColor: 'yellow'},
});

export default Home;
