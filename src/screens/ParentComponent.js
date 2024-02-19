import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import ConsentPopup from './ConsentPopup'; // นำเข้า Component ConsentPopup

const ParentComponent = () => {
  const [modalVisible, setModalVisible] = useState(false); // กำหนด modalVisible ในส่วน state

  const handleAccept = () => {
    console.log('Accepted');
    setModalVisible(false);
  };

  const handleDecline = () => {
    console.log('Declined');
    setModalVisible(false);
  };

  return (
    <View>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <ConsentPopup
        visible={modalVisible}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </View>
  );
};

export default ParentComponent;
