import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import ViewDetails from '../viewDetails'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class Touristcard extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (
          <View>
          <Card style={{marginRight:10,marginLeft:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: uri}} />
                <Body>
                  <Text>Tourist-1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                
                <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Location</Text>
                <Text> 
                  Vidhan Soudha
                </Text>
                <ViewDetails/>
                
              </Body>
            </CardItem>
            <CardItem> 
              <TouchableOpacity >
                <Text style={{color:"blue"}}>ACCEPT</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={{color:"red", marginLeft:20}}>DECLINE</Text>
              </TouchableOpacity>

             </CardItem>
          </Card>
          </View>
     
    );
  }
}

