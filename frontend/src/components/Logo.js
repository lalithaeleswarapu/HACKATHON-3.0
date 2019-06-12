import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class Logo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <View style={styles.container}>
            <Image style={{width:40, height:70}}
            source={require('../images/logo.png')} />
           <Text style={styles.logoText}>{this.props.type}</Text>
        </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }
  
  });