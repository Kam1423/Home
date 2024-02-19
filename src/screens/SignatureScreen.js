import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Signature from 'react-native-signature-canvas';


export default class SignatureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { signature: null };
  }

  handleSignature = signature => {
    this.setState({ signature });
    this.props.navigation.navigate('PersonalScreen')
    console.log('it work')
  };

  handleClear = () => {
    this.setState({ signature: null });
    this.signatureRef.clearSignature();
  };

  // handleSummit = () => {
  //   this.props.navigation.navigate('PersonalScreen')
  // };

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>เซ็นรับรอง</Text>
        <Signature
          ref={ref => (this.signatureRef = ref)}
          onOK={this.handleSignature}
          onEmpty={() => console.log('Empty')}
          descriptionText="กรุณาเซ็นข้างบน"
          clearText="เซ็นใหม่"
          confirmText="ยินยอม"
          webStyle={styles.signature}
          imageType='image/png'
        />

        {/* <TouchableOpacity style={styles.button} onPress={this.handleClear}>ล้างข้อมูล */}

        {/* <TouchableOpacity style={styles.button} onPress={this.handleSummit}>
          <Text style={styles.buttonText}>บันทึกข้อมูล</Text>
        </TouchableOpacity> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  signature: {
    width: 300,
    height: 200,
    backgroundColor: '#F8F8F8',
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
