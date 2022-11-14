import {View, Text} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FFF',
      }}>
      <Text>About</Text>
    </View>
  );
};

export default About;
