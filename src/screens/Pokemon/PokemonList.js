import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemonList} from '../../redux/reducers/PokemonReducer';
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
} from '../../constants';
import {TYPEICON} from '../../constants/type';

// components
import Input from '../../components/InputField';

export const PokemonList = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const renderPokemonCard = ({item, index}) => {
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
            console.log('Go to detail');
          }}>
          <View
            style={{
              position: 'relative',
              height: responsive.width(115),
              justifyContent: 'center',
              borderRadius: SIZES.padding,
              paddingHorizontal: responsive.width(20),
              backgroundColor:
                backgroundColors?.[`${item.data.types[0].type.name}`],
              marginBottom: responsive.width(30),
              overflow: 'hidden',
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
                  return (
                    <View
                      key={indexType}
                      style={{
                        flexDirection: 'row',
                        minWidth: responsive.width(60),
                        backgroundColor:
                          colorsType?.[`${pokemonType.type?.name}`],
                        padding: responsive.width(5),
                        borderRadius: responsive.width(3),
                        marginRight: responsive.width(5),
                      }}>
                      {}
                      <Image
                        resizeMode="cover"
                        source={TYPEICON.fire}
                        style={{
                          width: responsive.width(15),
                          height: responsive.width(15),
                          tintColor: colorCommon.white,
                        }}
                      />
                      <Text
                        style={{
                          marginLeft: responsive.width(5),
                          color: textColor.white,
                          ...FONTS.PokemonType,
                        }}>
                        {pokemonType.type?.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: colorCommon.white,
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
      <View
        style={{
          flex: 1,
          paddingTop: top,
          paddingHorizontal: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image
              resizeMode="cover"
              source={icons.backICon}
              style={{
                width: responsive.width(25),
                height: responsive.width(25),
                tintColor: textColor.black,
              }}
            />
          </TouchableWithoutFeedback>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: responsive.width(115),
            }}>
            <TouchableWithoutFeedback>
              <Image
                resizeMode="cover"
                source={icons.generationIcon}
                style={{
                  width: responsive.width(25),
                  height: responsive.width(25),
                  tintColor: textColor.black,
                }}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Image
                resizeMode="cover"
                source={icons.sortIcon}
                style={{
                  width: responsive.width(25),
                  height: responsive.width(25),
                  tintColor: textColor.black,
                }}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Image
                resizeMode="cover"
                source={icons.filterIcon}
                style={{
                  width: responsive.width(25),
                  height: responsive.width(25),
                  tintColor: textColor.black,
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View
          style={{
            marginTop: responsive.width(35),
            marginBottom: responsive.width(20),
          }}>
          <Text
            style={{
              marginBottom: responsive.width(10),
              color: textColor.black,
              ...FONTS.ApplicationTitle,
            }}>
            Pokemon
          </Text>

          <Text
            style={{
              marginBottom: responsive.width(25),
              color: textColor.grey,
              ...FONTS.Description,
            }}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>

          <Input placeHolder={'What Pokémon are you looking for?'} />
        </View>

        <View style={{flex: 1, paddingBottom: bottom}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={0.5}
            decelerationRate={0}
            data={data}
            renderItem={renderPokemonCard}
            // onEndReached
          />
        </View>
      </View>
    </View>
  );
};
