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

class Button extends React.Component {
  componentWillMount() {
    const state = {
      text: this.props.text
    }

    this.setState(state)
  }

  render() {
    return(
      <TouchableOpacity onPress={() => {}} style={styles.box}><Text style={styles.buttonText}>{this.props.text}</Text></TouchableOpacity>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Text>Entered Numbers Shown Here</Text>        
        </View> 
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
          <Button text='ADS'/>         
        </View> 
        <View style={styles.row}>
          <Button style={{borderRightWidth: 0}} text='0'/>         
          <Button style={{borderLeftWidth: 0}} text='0'/>         
          <Button text=''/>         
          <Button text=''/>         
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
