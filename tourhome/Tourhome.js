import React, { Component } from 'react'
import {
    View, Text, StyleSheet, Image, ScrollView,Button, TouchableHighlight
} from "react-native";
import PlacesImages from '../placesImages'
//import {Icon, Button, Container, Header, Content, Left} from 'native-base'

class TourHome extends Component {
    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        return (
            <ScrollView>

                <View style={styles.container}>
                    <View style={styles.topFlex}>
                        <View style={styles.imageStyle}>
                            <Image
                                source={{ uri: uri }}
                                style={{ width: 50, height: 50, borderRadius: 25, alignItems: "flex-start", margin: 5 }}
                            />
                        </View>

                        <View style={styles.nameStyle}>
                            <Text style={styles.textStyle}>Hello, Lalitha Eleswarapu!</Text>
                        </View>
                    </View>
                    <View style={styles.bottomFlex}>

                        <View style={{ flex: 1, alignItems: "center" , justifyContent:"center"}}>
                            <Text style={{ color: "#445A64", fontWeight: "bold", fontSize: 20, marginVertical: 10 }}> LOOKING FOR A GUIDE FOR YOUR TRIP?</Text>
                            <Text style={{color:"#445A64",fontSize:15}}> Fill the form giving the details of the trip and find a guide! Happy Searching :)</Text>
                            <TouchableHighlight style={styles.button}>
                                <Text style={{color:"white"}}>Fill Form</Text>
                            </TouchableHighlight>
                        </View>
                        <PlacesImages />
                        


                    </View>

                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topFlex: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#445A64",

        justifyContent: "center",

    },
    imageStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    nameStyle: {
        flex: 6,
        justifyContent: "center",
        alignItems: "flex-end"
    },

    textStyle: {
        color: "white",
        fontSize: 20,
        marginRight: 4
    },
    button:{
        alignItems: 'center',
        margin:20,
        backgroundColor: 'steelblue',
        padding: 10
    },
    bottomFlex: {
        flex: 9,
        //alignItems: "flex-start",
        backgroundColor: "white",
        padding:40


    }
})

export default TourHome