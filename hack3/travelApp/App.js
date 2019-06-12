
import React, {Component} from 'react';
import {Platform, AppRegistry, StyleSheet, Button, Text, Image, ImageBackground, View} from 'react-native';
import Home from './components/home'

export default class App extends Component {
  render() {
    return (
      <Home />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imageStyle:{
    width: 100,
    height: 100,
  },
  textStyle:{
    color: "white",
    fontSize: 30
  },
  startButton:{
    width: 1500,
    height: 70,
    paddingTop: 10,
    borderRadius: 25
  },
  headStyle:{
    color: "black",
    fontSize: 70,
    paddingTop: 100,
    alignItems: 'center',
  }
 
});
