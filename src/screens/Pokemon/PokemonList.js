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
  colorsType,
  FONTS,
  icons,
  responsive,
  SIZES,
  textColor,
  TYPEICON,
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
    ({item, index}) => {
      return (
        <View
          key={index}
          style={{
            position: 'relative',
            height: responsive.width(140),
            paddingTop: responsive.width(20),
            backgroundColor: 'transparent',
          }}>
          <Image
            resizeMode="cover"
            source={{
              uri: item.data.sprites.other['official-artwork'].front_default,
            }}
            style={[
              {
                width: responsive.width(130),
                height: responsive.width(130),
                position: 'absolute',
                top: responsive.width(0),
                right: responsive.width(15),
                zIndex: 100,
              },
            ]}
          />
          {/* Card Item */}
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('PokemonDetail', {selectedPokemon: item});
            }}>
            <View
              style={{
                position: 'relative',
                height: responsive.width(115),
                justifyContent: 'center',
                borderRadius: SIZES.padding,
                paddingHorizontal: responsive.width(20),
                marginBottom: responsive.width(30),
                overflow: 'hidden',
                backgroundColor:
                  backgroundColors?.[`${item.data.types[0].type.name}`],
              }}>
              <Image
                resizeMode="cover"
                source={backgroundImg.pokeball_card}
                style={[
                  {
                    width: responsive.width(150),
                    height: responsive.width(150),
                    position: 'absolute',
                    top: responsive.width(-15),
                    right: responsive.width(-15),
                  },
                ]}
              />
              <Image
                resizeMode="cover"
                source={backgroundImg.dot_card}
                style={[
                  {
                    width: responsive.width(70),
                    height: responsive.width(35),
                    position: 'absolute',
                    top: responsive.width(-10),
                    left: responsive.width(85),
                    tintColor: textColor.white,
                    opacity: 0.3,
                  },
                ]}
              />
              {/* Card_id Info */}
              <View>
                <Text
                  style={{
                    color: textColor.number,
                    marginBottom: responsive.width(3),
                    ...FONTS.PokemonNumber,
                  }}>
                  #
                  {item.data.id < 10
                    ? `00${item.data.id}`
                    : item.data.id < 100
                    ? `0${item.data.id}`
                    : item.data.id}
                </Text>
                <Text
                  style={{
                    color: textColor.white,
                    marginBottom: responsive.width(5),
                    ...FONTS.PokemonName,
                  }}>
                  {item.data.name}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  {/* badge type */}
                  {item.data.types?.map((pokemonType, indexType) => {
                    return <BadgeType index={indexType} type={pokemonType} />;
                  })}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
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
    marginBottom: responsive.width(25),
    color: textColor.grey,
    ...FONTS.Description,
  },
});

export default PokemonList;
