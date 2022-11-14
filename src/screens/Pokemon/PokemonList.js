import React, {useCallback, useEffect, useMemo} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemonList} from '../../redux/Slices/PokemonReducer';
import {
  backgroundColors,
  backgroundImg,
  colorCommon,
  FONTS,
  icons,
  responsive,
  SIZES,
  textColor,
} from '../../constants';

// components
import Input from '../../components/InputField';
import BadgeType from '../../components/BadgeType/BadgeType';

const PokemonList = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const renderPokemonCard = useCallback(
    ({item, indexCard}) => {
      return (
        <TouchableWithoutFeedback
          key={`pokecard-${indexCard}`}
          onPress={() => {
            navigation.navigate('PokemonDetail', {selectedPokemon: item});
          }}>
          <View style={PokemonListStyle.containerPokemonCardList}>
            <Image
              resizeMode="cover"
              source={{
                uri: item.data.sprites.other['official-artwork'].front_default,
              }}
              style={PokemonListStyle.pokemonImage}
            />
            <View
              style={[
                PokemonListStyle.wrapperPokemonCardItem,
                {
                  backgroundColor:
                    backgroundColors?.[`${item.data.types[0].type.name}`],
                },
              ]}>
              <Image
                resizeMode="cover"
                source={backgroundImg.pokeball_card}
                style={PokemonListStyle.pokeballCardItem}
              />
              <Image
                resizeMode="cover"
                source={backgroundImg.dot_card}
                style={PokemonListStyle.dotPatternPokemonCard}
              />
              <Text style={PokemonListStyle.pokemonNumber}>
                #
                {item.data.id < 10
                  ? `00${item.data.id}`
                  : item.data.id < 100
                  ? `0${item.data.id}`
                  : item.data.id}
              </Text>
              <Text style={PokemonListStyle.PokemonName}>{item.data.name}</Text>
              <View style={PokemonListStyle.containerBadge}>
                {item.data.types?.map((pokemonType, indexType) => {
                  return (
                    <BadgeType
                      key={indexType}
                      index={indexType}
                      type={pokemonType}
                    />
                  );
                })}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    },
    [navigation],
  );

  const memoizedPokemonCard = useMemo(
    () => renderPokemonCard,
    [renderPokemonCard],
  );

  return (
    <View style={PokemonListStyle.container}>
      <ImageBackground
        resizeMode="cover"
        source={backgroundImg.pokeballHeader}
        style={PokemonListStyle.pokeballHeader}
      />
      <View
        style={[
          PokemonListStyle.containerPokemonList,
          {
            paddingTop: top,
          },
        ]}>
        <View style={PokemonListStyle.containerButton}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image
              resizeMode="cover"
              source={icons.backICon}
              style={PokemonListStyle.backIcon}
            />
          </TouchableWithoutFeedback>

          <View style={PokemonListStyle.wrapperButtonRight}>
            <TouchableWithoutFeedback>
              <Image
                resizeMode="cover"
                source={icons.generationIcon}
                style={PokemonListStyle.generationIcon}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Image
                resizeMode="cover"
                source={icons.sortIcon}
                style={PokemonListStyle.sortIcon}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Image
                resizeMode="cover"
                source={icons.filterIcon}
                style={PokemonListStyle.filterIcon}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={PokemonListStyle.containerInput}>
          <Text style={PokemonListStyle.searchTitle}>Pokemon</Text>
          <Text style={PokemonListStyle.placeHolderSearch}>
            Search for Pokemon by name or using the National Pokédex number.
          </Text>
          <Input placeHolder={'What Pokemon are you looking for?'} />
        </View>

        <View
          style={[
            PokemonListStyle.wrapperPokemonList,
            {paddingBottom: bottom},
          ]}>
          <FlatList
            keyExtractor={(item, index) => `pokemon-${index}`}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={0.5}
            decelerationRate={'normal'}
            data={data}
            renderItem={memoizedPokemonCard}
            // onEndReached
          />
        </View>
      </View>
    </View>
  );
};

const PokemonListStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colorCommon.white,
  },
  pokeballHeader: {
    width: responsive.width(375),
    height: responsive.width(375),
    position: 'absolute',
    top: responsive.width(-375 / 2),
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: responsive.width(25),
    height: responsive.width(25),
    tintColor: textColor.black,
  },
  wrapperButtonRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsive.width(115),
  },
  generationIcon: {
    width: responsive.width(25),
    height: responsive.width(25),
    tintColor: textColor.black,
  },
  sortIcon: {
    width: responsive.width(25),
    height: responsive.width(25),
    tintColor: textColor.black,
  },
  filterIcon: {
    width: responsive.width(25),
    height: responsive.width(25),
    tintColor: textColor.black,
  },
  containerPokemonList: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  wrapperPokemonList: {
    flex: 1,
  },
  containerInput: {
    marginTop: responsive.width(35),
    marginBottom: responsive.width(20),
  },
  searchTitle: {
    marginBottom: responsive.width(10),
    color: textColor.black,
    ...FONTS.ApplicationTitle,
  },
  placeHolderSearch: {
    ...FONTS.Description,
    marginBottom: responsive.width(25),
    color: textColor.grey,
  },
  containerPokemonCardList: {
    position: 'relative',
    height: responsive.width(140),
    paddingTop: responsive.width(25),
    backgroundColor: 'transparent',
  },
  pokemonImage: {
    position: 'absolute',
    width: responsive.width(130),
    height: responsive.width(130),
    bottom: responsive.width(10),
    right: responsive.width(10),
    zIndex: 10,
  },
  wrapperPokemonCardItem: {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: SIZES.padding,
    height: responsive.width(115),
    marginBottom: responsive.width(30),
    justifyContent: 'center',
    paddingHorizontal: responsive.width(20),
  },
  pokeballCardItem: {
    width: responsive.width(145),
    height: responsive.width(145),
    position: 'absolute',
    top: responsive.width(-15),
    right: responsive.width(-20),
  },
  dotPatternPokemonCard: {
    width: responsive.width(74),
    height: responsive.width(32),
    position: 'absolute',
    top: responsive.width(5),
    left: responsive.width(90),
  },
  pokemonNumber: {
    color: textColor.number,
    marginBottom: responsive.width(3),
    ...FONTS.PokemonNumber,
  },
  PokemonName: {
    ...FONTS.PokemonName,
    color: textColor.white,
    marginBottom: responsive.width(6),
    textTransform: 'capitalize',
  },
  containerBadge: {
    flexDirection: 'row',
  },
});

export default PokemonList;
