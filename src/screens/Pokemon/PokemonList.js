import Input from 'components/InputField';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
} from 'src/constants';
import {TYPEICON} from 'src/constants/type';

export const PokemonList = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#FFF',
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

        <View style={{marginTop: responsive.width(35)}}>
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

        <View style={{flex: 1}}>
          <ScrollView
            style={{
              marginTop: responsive.width(10),
            }}>
            {/* Container card */}
            <View
              style={{
                position: 'relative',
                height: responsive.width(140),
                paddingTop: responsive.width(20),
                backgroundColor: 'transparent',
              }}>
              <Image
                resizeMode="cover"
                source={icons.Charizard_x_Icon}
                style={[
                  {
                    width: responsive.width(130),
                    height: responsive.width(130),
                    position: 'absolute',
                    top: responsive.width(-10),
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
                    backgroundColor: backgroundColors.fire,
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
                      #000
                    </Text>
                    <Text
                      style={{
                        color: textColor.white,
                        marginBottom: responsive.width(5),
                        ...FONTS.PokemonName,
                      }}>
                      Charizard X
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      {/* badge type */}
                      <View
                        style={{
                          flexDirection: 'row',
                          minWidth: responsive.width(60),
                          backgroundColor: colorsType.fire,
                          padding: responsive.width(5),
                          borderRadius: responsive.width(3),
                          marginRight: responsive.width(5),
                        }}>
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
                          Fire
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          minWidth: responsive.width(60),
                          backgroundColor: colorsType.fire,
                          padding: responsive.width(5),
                          borderRadius: responsive.width(3),
                          marginRight: responsive.width(5),
                        }}>
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
                          Fly
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
