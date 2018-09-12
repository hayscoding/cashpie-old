import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';
 
var { height, width } = Dimensions.get('window');
 
var col_count = 4;
var box_width = width / col_count;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>Entered Numbers Shown Here</Text>        
        </View> 
        <View style={styles.row}>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
        </View> 
        <View style={styles.row}>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
        </View> 
        <View style={styles.row}>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
          <View style={styles.box}><Text style={styles.buttonText}>Box1</Text></View>
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
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    height: height,
    width: box_width,
    backgroundColor: '#CECCCF',
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'space-around',
  },
});
