import React, { Component } from 'react';
import { Modal, h1, Text, TouchableHighlight, Image, StyleSheet, Button, View, Alert } from 'react-native';
import { Root } from 'native-base';

export default class GuideDetails extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render()
   {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View style={styles.container}>
              <View>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Image source={{uri:uri}} style={{width:100, height:100, borderRadius: 50}}></Image>
                </View>
                <View>
                <Text style={styles.headStyle}> Lalitha Eleswarapu</Text>
                </View>
              </View>
              <View >
              <View style={styles.itemStyle}>
                <Text style={{ fontWeight: "bold", flex: 1, color: "#455A64", fontSize: 18 }}>Place:</Text>
                <Text style={{ flex: 1 , fontSize:18}}>
                  Vidhan Soudha
                </Text>
              </View>
              <View style={styles.itemStyle}>
                <Text style={{ fontWeight: "bold", flex: 1, color: "#455A64", fontSize: 18 }}>Contact Number:</Text>
                <Text style={{ flex: 1, fontSize:18 }}>
                  7779844804
                </Text>
              </View>
              <View style={styles.itemStyle}>
                <Text style={{ fontWeight: "bold", flex: 1, color: "#455A64", fontSize: 18 }}>Email ID:</Text>
                <Text style={{ flex: 1, fontSize:18 }}>
                  spookyteen123@yahoo.com
                </Text>
              </View>
              <View style={styles.itemStyle}>
                <Text style={{ fontWeight: "bold", flex: 1, color: "#455A64", fontSize: 18 }}>Address: </Text>
                <Text style={{ flex: 1, fontSize:18 }}>
                  11-2-5/A, GandhiNagar, Gujarat.
                </Text>
              </View>
              <View style={styles.itemStyle}>
                <Text style={{ fontWeight: "bold", flex: 1, color: "#455A64", fontSize: 18 }}>Languages known:</Text>
                <Text style={{ flex: 1 , fontSize:18}}>
                  Telugu, Malayalam, Hindi, English
                </Text>
              </View>
              <View style={styles.itemStyle}>
                <Text style={{ fontWeight: "bold", flex: 1, color: "#455A64", fontSize: 18 }}>Ratings: </Text>
                <Text style={{ flex: 1, fontSize:18 }}>
                  3 stars
                </Text>
              </View>
              <View style={styles.closeStyle}>
                <Button title="Close" onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                </Button>
              </View>
              </View>
              
            </View>
          </View>
        </Modal>

        <TouchableHighlight

          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{ color: '#87838B' }}>VIEW DETAILS</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  closeStyle: {
    width: 200,
    paddingTop: 50
  },
  headStyle: {
    fontSize: 30,
    paddingBottom: 30
  },
  itemStyle: {
    flexDirection: "row"
  },
  container: {
    alignItems: "center",
    padding: 15,
  }
})