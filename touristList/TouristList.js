import React, { Component } from 'react'
import {
    View, Text, StyleSheet, Image, ScrollView
} from "react-native";
import GuideCard from '../guideCard'
//import {Icon, Button, Container, Header, Content, Left} from 'native-base'

class TouristList extends Component {
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

                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Text style={{ color: "#445A64", fontWeight: "bold", fontSize: 16, marginVertical: 10 }}> AVAILABLE GUIDES</Text>
                        </View>

                        <GuideCard />
   
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
    bottomFlex: {
        flex: 9,
        //alignItems: "flex-start",
        backgroundColor: "white"


    }
})

export default TouristList