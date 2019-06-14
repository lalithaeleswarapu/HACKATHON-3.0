
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';

export default class BookingForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         contact: '',
    //         address: '',
    //         place: '',
    //         languages: ''
    //     }
    // }
    render() {
        // var data = JSON.parse(this.props.res);
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <ScrollView style={styles.container}>
                <View style={styles.topFlex}>
                    <View style={styles.imageFlex}>
                        <Image
                            source={{ uri: uri }}
                            style={{ width: 90, height: 90, borderRadius: 90 / 2, margin: 5 }}
                        />
                    </View>
                    <View style={styles.nameFlex}>
                        <Text style={styles.nameStyle}> Name,Hardcoded</Text>
                    </View>
                </View>
                <View style={styles.bottomFlex}>
                    <View style={styles.box}>
                        <View style={{ flexDirection: "column", flex: 1, alignItems: 'flex-start',justifyContent: "center" }}>
                            <Text style={{fontWeight:"bold",fontSize:17, marginLeft:20}}>Date of tour:</Text></View>
                        <View style={{ flexDirection: "column", flex: 2 }}>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder="Name"
                                selectionColor="#fff"
                                // onChangeText={(val) => this.setState({ name: val })}
                                 />
                        </View>

                    </View>
                    <View style={styles.box}>
                        <View style={{ flexDirection: "column", flex: 1, alignItems: 'flex-start',justifyContent: "center" }}>
                            <Text style={{fontWeight:"bold",fontSize:17, marginLeft:20}}>Approximate time:</Text></View>
                        <View style={{ flexDirection: "column", flex: 2 }}>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder="E-Mail"
                                keyboardType="email-address"
                                selectionColor="#fff"
                                // onChangeText={(val) => this.setState({ email: val })} 
                                />
                        </View>

                    </View>
                    <View style={styles.box}>
                        <View style={{ flexDirection: "column", flex: 1, alignItems: 'flex-start',justifyContent: "center" }}>
                            <Text style={{fontWeight:"bold",fontSize:17, marginLeft:20}}>Location:</Text></View>
                        <View style={{ flexDirection: "column", flex: 2 }}>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder="Contact Number"
                                keyboardType="numeric"
                                selectionColor="#fff"
                                // onChangeText={(val) => this.setState({ contact: val })}
                                 />
                        </View>

                    </View>
                    <View style={styles.box}>
                        <View style={{ flexDirection: "column", flex: 1, alignItems: 'flex-start',justifyContent: "center" }}>
                            <Text style={{fontWeight:"bold",fontSize:17, marginLeft:20}}>Number of members in the group:</Text></View>
                        <View style={{ flexDirection: "column", flex: 2 }}>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder="Address"
                                selectionColor="#fff"
                                // onChangeText={(val) => this.setState({ address: val })} 
                                />
                        </View>

                </View>
                
                <View style={{flex:1}}>
                <TouchableOpacity style={{marginVertical:10,alignItems:"flex-start"}}>
                    <Button title="FIND GUIDE" color="#455A64" ></Button>
                    {/* <Text style={{fontSize:20, color:"#83848A"}}>FIND GUIDE</Text> */}
                </TouchableOpacity>
                </View>
                </View>
               
            </ScrollView>
        )

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#455A64"
    },
    nameFlex: {
        flex: 2,
        flexDirection: "column",
        //alignSelf:'baseline',
        justifyContent: "center",
        alignItems: "center"
    },
    cardStyle: {
        width: 320,

    },
    imageFlex: {
        flex: 1
    },
    nameStyle: {
        color: "white",
        fontSize: 30
    },
    bottomFlex: {
        flex: 3,
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 10

    },
    box: {
        flexDirection: 'row',
        //justifyContent: 'space-around',
    },
    inputBox: {
        width: 200,
        backgroundColor: 'rgba(255,255,255,0.2)',
        //borderRadius: 25,
        borderBottomWidth: 2,
        borderBottomColor: 'steelblue',
        paddingLeft: 16,
        fontSize: 16,

        //color: '#ffffff',
        marginVertical: 10
    },
});
	
	
	
