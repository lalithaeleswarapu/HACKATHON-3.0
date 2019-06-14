import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import GuideDetails from '../guideDetails'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class Guidecard extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (
          <View>
          <Card style={{marginRight:10,marginLeft:10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: uri}} />
                <Body>
                  <Text>Guide-1</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                
                <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Contact Number</Text>
                <Text> 
                  7779844804
                </Text>
                <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Price per hour</Text>
                <Text> 
                50INR
                </Text>
                <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Rating</Text>
                <Text> 
                3 stars
                </Text>

                <GuideDetails/>
                
              </Body>
            </CardItem>
            <CardItem> 
              <TouchableOpacity >
                <Text style={{color:"blue"}}>BOOK GUIDE</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={{color:"red", marginLeft:20}}>RATE THE GUIDE</Text>
              </TouchableOpacity>

             </CardItem>
          </Card>
          </View>
     
    );
  }
}

