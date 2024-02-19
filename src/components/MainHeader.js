import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from './icon';
import {sizes, spacing} from '../constants/theme';

const MainHeader = ({title}) => {
  return (
    <View style={[styles.container, {marginTop:60} ,{marginLeft:-15}]}>
      <Icon icon="Hamburger"  />

      <Text style={[styles.title,{marginLeft:5}]}>{title}</Text>

      <Icon icon="Notification" style={[{marginLeft:5}]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default MainHeader;
