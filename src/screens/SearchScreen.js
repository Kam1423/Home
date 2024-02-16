import React from "react";
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Ionicons name="ios-arrow-back" size={64} color="#525750" onPress={() => navigation.navigate("Login")}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;