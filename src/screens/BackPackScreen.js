import {Text, View} from 'react-native';
import React from 'react';
import {colorCommon} from '../constants';

const BackPackScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colorCommon.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000'}}>Backpack Screen</Text>
    </View>
  );
};

export default BackPackScreen;
