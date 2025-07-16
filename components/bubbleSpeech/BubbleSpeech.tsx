import React from 'react';
import {StyleSheet, View} from 'react-native';
import Polygon from '../../assets/shapes/polygon.svg';
function BubbleSpeech() {
  return (
    <View style={[styles.container]}>
      <Polygon style={styles.polygon} />
      <View style={[styles.bubble]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginLeft: 20, flexDirection: 'row'},
  bubble: {
    width: 232,
    height: 110 /*REMOVE AFTER FINISHED*/,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  polygon: {position: 'relative', left: 3},
});

export default BubbleSpeech;
