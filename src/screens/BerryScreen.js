import {Text, View} from 'react-native';
import React from 'react';
import {colorCommon} from '../constants';

const BerryScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colorCommon.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000'}}>Berry Screen</Text>
    </View>
  );
};

export default BerryScreen;
