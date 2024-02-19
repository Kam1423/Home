import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import Welcome from '../screens/Welcome';
import ProfileScreen from '../screens/ProfileScreen';
import Verification from '../screens/OtpVerification';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import DeviceScene from '../screens/DeviceScene';
import SearchScreen from '../screens/SearchScreen';
import PersonalScreen from '../screens/PersonalScreen';
import SignatureScreen from '../screens/SignatureScreen';
import ConsentScreen from '../screens/EULAscreen';

const Stack = createStackNavigator();


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{}} initialRouteName='Root'>
        <Stack.Screen name="Root" component={TabNavigator} options={{headerShown: false,}}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="Verification" component={Verification}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="DeviceScene" component={DeviceScene}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="PersonalScreen" component={PersonalScreen}/>
        <Stack.Screen name="SignatureScreen" component={SignatureScreen}/>
        <Stack.Screen name="ConsentScreen" component={ConsentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;