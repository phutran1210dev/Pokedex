import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {colorCommon, FONTS, responsive, splashIcon} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SplashScreen = () => {
  const {height} = Dimensions.get('screen');
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={SplashStype.contaner}>
      <Image
        resizeMode="cover"
        source={splashIcon.splash_pokeball}
        style={SplashStype.pokeballImg}
      />
      <Image
        resizeMode="cover"
        source={splashIcon.vector_1}
        style={[SplashStype.vector_1, {transform: [{rotate: '-45deg'}]}]}
      />
      <Image
        resizeMode="cover"
        source={splashIcon.vector_2}
        style={SplashStype.vector_2}
      />
      <Image
        resizeMode="cover"
        source={splashIcon.vector_3}
        style={[SplashStype.vector_3, {transform: [{rotate: '-45deg'}]}]}
      />
      <Image
        resizeMode="cover"
        source={splashIcon.vector_4}
        style={SplashStype.vector_4}
      />
      <View style={SplashStype.wrapperContent}>
        <Text style={SplashStype.textTitle}>Pokedex</Text>
        <Text style={[SplashStype.textCompany, {marginBottom: bottom}]}>
          BAP Software
        </Text>
      </View>
    </View>
  );
};

const SplashStype = StyleSheet.create({
  contaner: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pokeballImg: {
    position: 'absolute',
    width: responsive.width(175),
    height: responsive.width(175),
    bottom: responsive.HEIGHT / 2 + responsive.width(-175 / 2),
  },
  vector_1: {
    position: 'absolute',
    width: responsive.width(145),
    height: responsive.width(75),
    top: responsive.width(100),
    left: responsive.width(-145 / 2),
  },
  vector_2: {
    position: 'absolute',
    width: responsive.width(120),
    height: responsive.width(94),
    top: responsive.width(280),
    right: responsive.width(20),
  },
  vector_3: {
    position: 'absolute',
    width: responsive.width(120),
    height: responsive.width(75),
    left: responsive.width(30),
    bottom: responsive.width(100),
  },
  vector_4: {
    position: 'absolute',
    width: responsive.width(150),
    height: responsive.width(150),
    right: responsive.width(50),
    bottom: responsive.width(-65),
  },
  wrapperContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    ...FONTS.ApplicationTitle,
    color: colorCommon.black,
    marginBottom: responsive.width(10),
  },
  textCompany: {
    ...FONTS.PokemonNumber,
    color: '#555555',
    fontSize: 12,
    lineHeight: 14,
  },
});

export default SplashScreen;
