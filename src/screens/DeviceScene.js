import React from "react";
import { View, SafeAreaView, ScrollView, Text} from 'react-native';
import * as Device from 'expo-device';

import { Ionicons } from "@expo/vector-icons";

const DeviceName = Device.modelName
const Devicebrand = Device.brand

const SearchScreen = ({}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
           <Text>{Devicebrand}</Text>
           <Text>{DeviceName}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
