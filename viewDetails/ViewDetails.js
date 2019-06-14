import React, { Component } from 'react';
import { Modal, h1, Text, TouchableHighlight, StyleSheet, Button, View, Alert } from 'react-native';

export default class ViewDetails extends Component {
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
              <Text style={styles.headStyle}> DETAILS</Text>
              <View style={styles.itemStyle}>
                <Text style={{fontWeight: "bold" , flex:1, color:"#455A64" ,fontSize:15}}>Location:</Text>
                <Text style={{flex:1}}> 
                  Vidhan Soudha
                </Text>
                </View>
                <View style={styles.itemStyle}>
                <Text style={{fontWeight: "bold" , flex:1, color:"#455A64" ,fontSize:15}}>Number of tourists:</Text>
                <Text style={{flex:1}}> 
                  8
                </Text>
                </View>
                <View style={styles.itemStyle}>
                <Text style={{fontWeight: "bold" , flex:1, color:"#455A64" ,fontSize:15}}>Date of Booking:</Text>
                <Text style={{flex:1}}> 
                  20.06.2019
                </Text>
                </View>
                <View style={styles.itemStyle}>
                <Text style={{fontWeight: "bold" , flex:1, color:"#455A64" ,fontSize:15}}>Time: </Text>
                <Text style={{flex:1}}> 
                  9:30 am
                </Text>
                </View>
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
          <Text  style={{color: '#87838B'}}>VIEW DETAILS</Text>
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
    itemStyle:{
      flexDirection: "row"
    },
  container:{
    alignItems: "center",
    padding: 20
  }
})