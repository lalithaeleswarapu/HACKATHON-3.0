import React, { Component } from 'react';
import { Modal, h1, Text, TouchableHighlight, StyleSheet, Button, View, Alert } from 'react-native';

export default class AboutUs extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
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
              {/* <Text>Show</Text> */}
              <Text style={styles.headStyle}> About us</Text>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              <View  style={styles.closeStyle}>
              <Button title="Close" onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                   </Button>
              </View>
         </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>About us</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  closeStyle:{
    width: 200,
    paddingTop: 50
  },
  headStyle:{
    fontSize: 30,
    paddingBottom: 30
  },
  container:{
    alignItems: "center",
    padding: 20
  }
})