import {Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000'}}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
