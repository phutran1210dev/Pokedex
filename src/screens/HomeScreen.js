/* eslint-disable react-native/no-inline-styles */
import DotExpand from '../components/DotExpand';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  // useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {
  backgroundImg,
  colorCommon,
  FONTS,
  icons,
  responsive,
  SIZES,
  textColor,
} from '../constants';
import regions from '../data/dataRegions.json';

const HomeScreen = ({navigation}) => {
  /**
   * @Card_Regions
   */
  const dataRegions = regions;

  const dotPosition = useSharedValue(0);
  const ScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      // const newRegionScrollX = event.contentOffset.x;
      dotPosition.value = event.contentOffset.x;
    },
  });
  const renderRegions = ({item, index}) => {
    return (
      <View
        // container Card Regions
        style={{
          width: responsive.WIDTH - responsive.width(40),
          height: responsive.width(150),
          marginRight: responsive.width(20),
        }}>
        {/* Card Item Regions */}
        <View
          key={index.toString()}
          dotPosition={dotPosition}
          style={{
            flex: 1,
            backgroundColor: '#262626',
            borderRadius: responsive.width(10),
            position: 'relative',
          }}>
          <View
            style={{
              marginTop: responsive.width(20),
              marginLeft: responsive.width(15),
            }}>
            <Text style={{color: textColor.white, ...FONTS.FilterTitle}}>
              {item.region}
            </Text>
          </View>
          {/* Process */}
          <View
            style={{
              backgroundColor: '#5C5C5C',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsive.width(50),
              width: responsive.width(75),
              height: responsive.width(75),
              position: 'absolute',
              bottom: responsive.width(-75 / 3),
              right: responsive.width(0),
              left: responsive.width(15),
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Region', {selectedRegion: item})
              }
              style={{
                width: responsive.width(65),
                height: responsive.width(65),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#262626',
                borderRadius: responsive.width(50),
              }}>
              <Text style={{color: textColor.white, ...FONTS.CustomFont}}>
                GO
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pokeball */}
        <Image
          resizeMode="cover"
          source={backgroundImg.pokeball_card}
          style={[
            {
              width: responsive.width(150),
              height: responsive.width(150),
              position: 'absolute',
              right: -15,
            },
          ]}
        />
        <Image
          resizeMode="cover"
          source={backgroundImg.map_card}
          style={[
            {
              width: responsive.width(60),
              height: responsive.width(60),
              position: 'absolute',
              top: responsive.width(45),
              right: responsive.width(30),
            },
          ]}
        />
      </View>
    );
  };

  /**
   *
   * @DOTSECTION
   */

  const renderDots = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: responsive.width(-15),
          left: responsive.WIDTH / 2 - 50,
          flexDirection: 'row',
        }}>
        {dataRegions.regions?.map((item, index) => {
          return (
            <DotExpand
              index={index}
              dotPosition={dotPosition}
              key={index.toString()}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={[
        {
          flex: 1,
          position: 'relative',
          backgroundColor: colorCommon.white,
        },
      ]}>
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
      {/* Wrapper Text Regions */}
      <View style={{marginTop: responsive.width(110)}}>
        <View
          style={{
            paddingHorizontal: responsive.width(SIZES.padding),
            marginBottom: responsive.width(SIZES.padding),
          }}>
          <Text style={{color: textColor.black, ...FONTS.CustomFont}}>
            POKEDEX REGIONS
          </Text>
        </View>

        <Animated.FlatList
          style={{paddingBottom: SIZES.padding + 10}}
          snapToAlignment="center"
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0.5}
          decelerationRate={0}
          data={dataRegions.regions}
          snapToOffsets={Array.from({
            length: dataRegions.regions?.length,
          }).map((item, index) => {
            return (responsive.WIDTH - responsive.width(SIZES.padding)) * index;
          })}
          keyExtractor={region => region.id}
          onScroll={ScrollHandler}
          renderItem={renderRegions}
          contentContainerStyle={{
            paddingLeft: responsive.width(SIZES.padding),
          }}
        />
        {renderDots()}
      </View>

      {/* Category */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.ApplicationTitle}}>Category</Text>

        {/* Container cagegory */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginTop: responsive.width(30)}}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('PokemonList', {selectedCategory: null})
            }>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                overflow: 'hidden',
                height: responsive.width(115),
                backgroundColor: '#262626',
                marginBottom: SIZES.padding,
              }}>
              <Text
                style={{
                  marginLeft: SIZES.padding,
                  color: textColor.white,
                  ...FONTS.PokemonName,
                }}>
                Pokemon
              </Text>
              <Image
                resizeMode="cover"
                source={backgroundImg.pokeball_card}
                style={[
                  {
                    width: responsive.width(150),
                    height: responsive.width(150),
                    position: 'absolute',
                    top: -15,
                    right: -15,
                  },
                ]}
              />
              <Image
                resizeMode="cover"
                source={icons.Charizard_x_Icon}
                style={[
                  {
                    width: responsive.width(50),
                    height: responsive.width(50),
                    position: 'absolute',
                    top: responsive.width(35),
                    right: responsive.width(35),
                  },
                  {transform: [{rotateY: '180deg'}]},
                ]}
              />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
