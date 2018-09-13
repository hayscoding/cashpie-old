import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
 
var { height, width } = Dimensions.get('window');
 
var col_count = 4;
var box_width = width / col_count;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Text>Entered Numbers Shown Here</Text>        
        </View> 
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>CLR</Text></TouchableOpacity>
        </View> 
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}></Text></TouchableOpacity>
        </View> 
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>Box1</Text></TouchableOpacity>
        </View> 
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {}} style={[styles.box, {borderRightWidth: 0}]}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <View style={[styles.box, {borderLeftWidth: 0}]}><Text style={styles.buttonText}></Text></View>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}></Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}></Text></TouchableOpacity>
        </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRow: {
    flex: 2,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    borderWidth: 2,
    flexDirection: 'column',
    borderColor: 'black',
    height: height,
    width: box_width,
    backgroundColor: '#CECCCF',
    alignItems: "center"
  },
  buttonText: {
    flex: 1,
  },
});
