import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
            <Ionicons name="ios-arrow-back" size={24} color="#525750" onPress={() => navigation.navigate("Home")}/>
            <MaterialIcons name="more" size={24} color="#525750"></MaterialIcons>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={require('../../assets/images/Profile1.jpg')} style={styles.image} resizeMode="center"></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons name="ios-add" size={38} color="#DFD8C8" style={{marginTop: 6, marginLeft: 2}}></Ionicons>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 28 }]}>sakornPhong  Rongtau</Text>
        </View>
        <View style={styles.hairline}></View>

        <View style={{ marginTop: 32, marginLeft: 50 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaContainer}>
              <Text style={[styles.text, { fontSize: 18 }]}>ชื่อ-นามสกุล : Julie Parker </Text>  
              <Text style={[styles.text, { fontSize: 18 }]}>HN : 0123456789 </Text> 
              <Text style={[styles.text, { fontSize: 18 }]}>Role : Citizen Gold </Text>
              <Text style={[styles.text, { fontSize: 18 }]}>ID : 0251358 </Text>     
            </View>
            <View style={styles.mediaImageContainer}>
              <Text style={[styles.text, { fontSize: 24 }]}></Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: "#525750"
  },
  hairline: {
    backgroundColor:'black',
    marginTop:20,
    height:2,
    width:Dimensions.get('screen').width,
  },
  subText:{
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FF89",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
     alignSelf: "center",
     alignItems: "center",
     marginTop: 16
  },
  statsContainer:{
    flexDirection:"row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox:{
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0 ,0 ,0 , 0.38)",
    shadowOffset: { width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});

export default ProfileScreen;