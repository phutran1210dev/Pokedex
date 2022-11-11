import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  colorCommon,
  textColor,
  colorsType,
  FONTS,
  responsive,
  TYPEICON,
} from '../../constants';

const BadgeType = ({index, type}) => {
  return (
    <View
      key={index}
      style={[
        BadgeStype.containerBadge,
        {backgroundColor: colorsType?.[`${type?.type.name}`]},
      ]}>
      <Image
        resizeMode="cover"
        source={TYPEICON?.[`${type?.type.name}`]}
        style={BadgeStype.iconType}
      />
      <Text style={BadgeStype.pokemonName}>{type?.type.name}</Text>
    </View>
  );
};

export default memo(BadgeType);

const BadgeStype = StyleSheet.create({
  containerBadge: {
    flexDirection: 'row',
    minWidth: responsive.width(60),
    padding: responsive.width(5),
    borderRadius: responsive.width(5),
    marginRight: responsive.width(5),
  },
  pokemonName: {
    marginLeft: responsive.width(5),
    color: textColor.white,
    textTransform: 'capitalize',
    ...FONTS.PokemonType,
  },
  iconType: {
    width: responsive.width(15),
    height: responsive.width(15),
    tintColor: colorCommon.white,
  },
});
