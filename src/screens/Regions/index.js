import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import {
  backgroundImg,
  icons,
  responsive,
  SIZES,
  textColor,
} from 'src/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const RegionPlace = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#F5F5F5',
        paddingTop: top,
      }}>
      <ImageBackground
        resizeMode="cover"
        source={backgroundImg.pokeballHeader}
        style={{
          width: responsive.width(375),
          height: responsive.width(375),
          position: 'absolute',
          top: responsive.width(-375 / 2),
        }}
      />
      <TouchableOpacity
        style={{
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginTop: 5,
        }}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
