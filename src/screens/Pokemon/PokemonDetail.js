import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  backgroundColors,
  backgroundImg,
  colorCommon,
  FONTS,
  icons,
  responsive,
  textColor,
} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BadgeType from '../../components/BadgeType/BadgeType';

const PokemonDetail = ({navigation, route}) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    setSelectedPokemon(route.params.selectedPokemon);
  }, [route.params.selectedPokemon]);
  console.log('selectedPokemon', selectedPokemon?.data);
  return (
    <View
      style={[
        PokemonDetailStyle.container,
        {
          backgroundColor:
            backgroundColors?.[`${selectedPokemon?.data.types[0].type.name}`],
          paddingTop: top,
        },
      ]}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image
          resizeMode="cover"
          source={icons.backICon}
          style={PokemonDetailStyle.backIcon}
        />
      </TouchableWithoutFeedback>
      {/* Pokemon container */}
      <View style={PokemonDetailStyle.pokemonContainer}>
        <Image
          resizeMode="cover"
          source={{
            uri: selectedPokemon?.data.sprites.other['official-artwork']
              .front_default,
          }}
          style={PokemonDetailStyle.pokemonImage}
        />
        <Image
          resizeMode="cover"
          source={backgroundImg.pokemon_circle}
          style={PokemonDetailStyle.pokemonCircle}
        />
        <View style={PokemonDetailStyle.pokemonInfoContainer}>
          <Text style={PokemonDetailStyle.pokemonNumber}>
            #
            {selectedPokemon?.data.id < 10
              ? `00${selectedPokemon?.data.id}`
              : selectedPokemon?.data.id < 100
              ? `0${selectedPokemon?.data.id}`
              : selectedPokemon?.data.id}
          </Text>
          <Text style={PokemonDetailStyle.pokemonName}>
            {selectedPokemon?.data.name}
          </Text>
          <View style={PokemonDetailStyle.containerBadge}>
            {selectedPokemon?.data.types?.map((pokemonType, indexType) => {
              return <BadgeType index={indexType} type={pokemonType} />;
            })}
          </View>
        </View>
        <Image
          resizeMode="cover"
          source={icons.nextIcon}
          style={PokemonDetailStyle.nextIcon}
        />
      </View>
    </View>
  );
};

const PokemonDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBadge: {
    flexDirection: 'row',
  },
  backIcon: {
    marginLeft: responsive.width(40),
    width: responsive.width(20),
    height: responsive.width(20),
    tintColor: colorCommon.white,
  },
  nextIcon: {
    marginLeft: responsive.width(10),
    width: responsive.width(25),
    height: responsive.width(25),
  },
  pokemonContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsive.width(15),
    marginLeft: responsive.width(40),
  },
  pokemonCircle: {
    position: 'absolute',
    zIndex: -10,
    width: responsive.width(125),
    height: responsive.width(125),
  },
  pokemonImage: {
    width: responsive.width(125),
    height: responsive.width(125),
  },
  pokemonInfoContainer: {
    marginLeft: responsive.width(20),
  },
  pokemonName: {
    ...FONTS.PokemonName,
    color: textColor.white,
    textTransform: 'capitalize',
    marginBottom: responsive.width(5),
    lineHeight: 38,
    fontSize: 32,
  },
  pokemonNumber: {
    ...FONTS.PokemonNumber,
    color: textColor.number,
    lineHeight: 19,
  },
});
export default memo(PokemonDetail);
