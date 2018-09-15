import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform, 
  NativeModules,
  InteractionManager,
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
    <TouchableOpacity onPress={() => { props.cb() }} style={styles.box}><Text style={styles.buttonText}>{props.text}</Text></TouchableOpacity>
  )
}

function StatusBarBackground(props) {
  return(
    <View style={[styles.statusBarBackground, props.style || {}]}></View>
  ) 
}

class Numpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '234234'};
  } 

  addChar(input) {
    console.log('input: ', input)
    const text = "" + this.state.text + input;

    InteractionManager.runAfterInteractions(() => {
      this.setState({text});
    })
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.topRow}>
          <Text style={styles.input}>{this.state.text}</Text>        
        </View> 
        <View style={{flex: 1}}>
          <View style={styles.row}>
            <Button text='1' cb={() => { this.addChar('1') }}/>         
            <Button text='2' cb={() => { this.addChar('2') }}/>         
            <Button text='3' cb={() => { this.addChar('3') }}/>         
            <Button text='CLR' cb={() => {}}/>         
          </View> 
          <View style={styles.row}>
            <Button text='4' cb={() => { this.addChar('4') }}/>         
            <Button text='5' cb={() => { this.addChar('5') }}/>         
            <Button text='6' cb={() => { this.addChar('6') }}/>         
            <Button text='blaudnfk' cb={() => {}}/>         
          </View> 
          <View style={styles.row}>
            <Button text='7' cb={() => { this.addChar('7') }}/>         
            <Button text='8' cb={() => { this.addChar('8') }}/>         
            <Button text='9' cb={() => { this.addChar('9') }}/>         
            <Button text='BLEH' cb={() => {}}/>         
          </View> 
          <View style={styles.row}>
            <Button text='0' cb={() => { this.addChar('0') }}/>         
            <Button text='' cb={() => {}}/>         
            <Button text='' cb={() => {}}/>         
            <Button text='' cb={() => {}}/>      
          </View> 
        </View>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground />
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
  },
  statusBarBackground: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: "white",
  },
});
