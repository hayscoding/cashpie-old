import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';
 
var { height, width } = Dimensions.get('window');
 
var box_count = 3;
var box_width = width / box_count;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.box, styles.box1]}><Text>Box1</Text></View>
          <View style={[styles.box, styles.box2]}><Text>Box2</Text></View>
          <View style={[styles.box, styles.box3]}><Text>Box3</Text></View>
        </View> 
        <View style={styles.row}>
          <View style={[styles.box, styles.box1]}><Text>Box1</Text></View>
          <View style={[styles.box, styles.box2]}><Text>Box2 </Text></View>
          <View style={[styles.box, styles.box3]}><Text>Box3</Text></View>
        </View> 
        <View style={styles.row}>
          <View style={[styles.box, styles.box1]}><Text>Box1</Text></View>
          <View style={[styles.box, styles.box2]}><Text>Box2</Text></View>
          <View style={[styles.box, styles.box3]}><Text>Box3</Text></View>
        </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  box: {
    height: height,
    width: box_width,
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});
