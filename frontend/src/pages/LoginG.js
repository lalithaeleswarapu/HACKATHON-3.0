import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux'; 

export default class LoginG extends Component {

    signup(){
        Actions.signup();
    }

    loginT(){
        Actions.loginT();
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo type="Login as Guide"/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupbutton}> SignUp</Text></TouchableOpacity>
                </View>
                <View style={styles.signupTextContOther}>
                    <Text style={styles.signupText}>Signed up as a Tourist?</Text>
                    <TouchableOpacity onPress={this.loginT}><Text style={styles.signupbutton}> SignIn</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 25  
    },
    signupTextContOther: {
        flexGrow: 1,
        justifyContent: 'center',
        flexDirection: 'row'   
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupbutton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
  
  });