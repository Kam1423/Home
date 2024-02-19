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
  };

  handleClear = () => {
    this.setState({ signature: null });
    this.signatureRef.clearSignature();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>เซ็นรับรอง</Text>
        <Signature
          ref={ref => (this.signatureRef = ref)}
          onOK={this.handleSignature}
          onEmpty={() => console.log('Empty')}
          descriptionText="เซ็นต์ที่นี่"
          clearText="ล้าง"
          confirmText="ยืนยัน"
          webStyle={styles.signature}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleClear}>
          <Text style={styles.buttonText}>บันทึกข้อมูล</Text>
        </TouchableOpacity>
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
