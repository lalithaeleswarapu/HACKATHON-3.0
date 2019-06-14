import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TextInput,
    ScrollView,
    Button,
    Text
} from "react-native";
import { Thumbnail, Content, Container, Card, CardItem, Header, Body } from "native-base";
import Hamburger from '../hamburger';


export default class GuideDash extends Component {
    // state = {

    // };

    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (

            <View style={styles.container}>
                <View style={styles.topFlex}>

                    {/* <Thumbnail large source={{uri: uri}} /> */}
                    <View style={styles.imageFlex}>
                      <Hamburger />
                    <Image
                        source={{uri:uri}}
                        style={{ width: 120, height: 120, borderRadius: 400 / 2, margin: 5 }}
                    />
                    </View>
                    <View style={styles.nameFlex}>
                    <Text style={styles.nameStyle}> lalitha Eleswarapu</Text>
                    </View>


                </View>
                <View style={styles.bottomFlex}>
                <Container>
        {/* <Header /> */}
        <ScrollView>
        <Content padder>
          <Card style={styles.cardStyle}>
   
            <CardItem >
              <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Name</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lalitha eleswarapu
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Date of Birth</Text>
            </CardItem>
            <CardItem>
              <Body>

              <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
                {/* <Text>
                  30-11-1998
                </Text> */}
              </Body>
            </CardItem>
       
            <CardItem >
              <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Contact Number</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lalitha eleswarapu
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Email Address</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lalitha eleswarapu
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Address</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lalitha eleswarapu
                </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Text style={{fontWeight: "bold" , color:"#455A64" ,fontSize:15}}>Price per hour</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lalitha eleswarapu
                </Text>
              </Body>
            </CardItem>
          </Card>
         

        </Content>
        </ScrollView>
        </Container>

       
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    topFlex: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#455A64"
    },
    nameFlex:{
        flex:2,
        flexDirection: "column",
        //alignSelf:'baseline',
        justifyContent: "center",
        alignItems: "center"
    },
    cardStyle:{
        width:320,
        
    },
    imageFlex:{
        flex:1
    },
    nameStyle: {
        color: "white",
        fontSize: 30
    },
    bottomFlex: {
        flex: 3,
        alignItems: "center",
        backgroundColor: "white"

    }
});
