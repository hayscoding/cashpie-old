import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform, 
  NativeModules,
} from 'react-native';

const { StatusBarManager } = NativeModules;

//Screen measurements
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
var { height, width } = Dimensions.get('window');
 
//Relevant for grid like keypad
var col_count = 4;
var box_width = width / col_count;

function Button(props) {
  return(
    <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>{props.text}</Text></TouchableOpacity>
  )
}

function StatusBarBackground(props) {
  return(
    <View style={[styles.statusBarBackground, props.style || {}]}></View>
  ) 
}

class Numpad extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.row}>
          <Button text='1'/>         
          <Button text='2'/>         
          <Button text='3'/>         
          <Button text='CLR'/>         
        </View> 
        <View style={styles.row}>
          <Button text='4'/>         
          <Button text='5'/>         
          <Button text='6'/>         
          <Button text='blaudnfk'/>         
        </View> 
        <View style={styles.row}>
          <Button text='7'/>         
          <Button text='8'/>         
          <Button text='9'/>         
          <Button text='BLEH'/>         
        </View> 
        <View style={styles.row}>
          <Button text='0'/>         
          <Button text='' />         
          <Button text=''/>         
          <Button text=''/>         
        </View> 
      </View>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '234234'};
  } 

  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground />
        <View style={styles.topRow}>
          <Text style={styles.input}>{this.state.text}</Text>        
        </View> 
        <Numpad style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 55,
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
  statusBarBackground: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: "white",
  },
});
