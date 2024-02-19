import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import HomeList from '../components/HomeList';
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = () => {
  return (
    <LinearGradient style={styles.container}
    colors={['#1bb8f5','#ffffff']}
    start={{x:0, y:0}}
    end={{x:0.5, y:1}}
    >
      
      <MainHeader title="โรงพยาบาลผิวหนังเขตร้อนภาคใต้" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES}/>
        <SectionHeader
          title="บริการ"
        />
        <HomeList list={PLACES}/>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.blue,
  },
});

export default HomeScreen;
