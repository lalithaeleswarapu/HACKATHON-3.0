import React, {Component} from 'react';
import {Router, Stack, Scene } from 'react-native-router-flux';

import LoginT from './pages/LoginT';
import LoginG from './pages/LoginG';
import Signup from './pages/Signup';

export default class Routes extends Component  {
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="loginT" component={LoginT} title="Login as Tourist" initial={true}/>
                    <Scene key="loginG" component={LoginG} title="Login as Guide"/>
                    <Scene key="signup" component={Signup} title="Register" />
                </Stack>
            </Router>
        )
    }
}