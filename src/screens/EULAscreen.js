import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConsentScreen = ({visibleModal,setVisibleModal}) => {

  [visibleModal,setVisibleModal] = useState(true);

  const navigation = useNavigation();
  
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visibleModal}
      onRequestClose={() => {
        // ปิดModal (ปุ่มย้อนกลับ)
        visibleModal(false)
        navigation.navigate('Signup')
        console.log('Modal has been closed.');
      }}
    >
      
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText, { fontSize: 25 }]}>แบบยินยอมการรับบริการ{'\n'}</Text>

          <View>
            <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}>
              วัตถุประสงค์
            </Text>

            <Text style={{ fontSize: 16, textAlign: 'left', marginBottom: 5 }}>
              1. เพื่อให้ประชาชน ผู้รับบริการ ทุกพื้นที่สามารถเข้าถึงบริการด้านการ ให้คำแนะนำด้านสุขภาพวินิจฉัยโรคเบื้องต้น
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'left', marginBottom: 5 }}>
              2. เพื่อให้ประชาชนผู้รับบริการสามารถเข้าถึงและบริหารจัดการข้อมูลสุขภาพทางอิเล็กทรอนิกส์ของต้นได้
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'left', marginBottom: 5 }}>
              3. เพื่อให้ระบบสารสนเทศและบุคลากรที่ได้รับอนุญาตในการรักษาพยาบาล สามารถนำข้อมูลทางอิเล็กทรอนิกส์เพื่อการบริการสุขภาพไปใช้สำหรับการเข้ารับการรักษาของผู้รับบริการ และเป็นข้อมูลสำคัญ
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => {
                setVisibleModal(false)
                navigation.navigate('Signup')
              }}
            >
              <Text style={styles.buttonText}>ไม่ยินยอม</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => {
                setVisibleModal(false)
                navigation.navigate('SignatureScreen')
              }}
            >
              <Text style={styles.buttonText}>ยินยอม</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 35,
  },
  closeButtonText: {
    fontSize: 25,
    color: 'gray',
  }
});

export default ConsentScreen;