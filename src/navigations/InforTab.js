// Core components
import React, {useReducer} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// reanimated
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

// Components
import About from '../screens/Pokemon/PokemonInfor/About';
import Evolution from '../screens/Pokemon/PokemonInfor/Evolution';
import Stats from '../screens/Pokemon/PokemonInfor/Stats';

// Icons
import {colorCommon, FONTS, icons, responsive} from '../constants';

const InforTab = ({navigation, backgroundColor}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={About}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: responsive.width(0),
          left: responsive.width(0),
          right: responsive.width(0),
          top: responsive.width(0),
          borderTopLeftRadius: responsive.width(30),
          borderTopRightRadius: responsive.width(30),
        },
      }}
      sceneContainerStyle={{
        backgroundColor: backgroundColor,
      }}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Evolution" component={Evolution} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transperent',
    marginHorizontal: responsive.width(10),
  },
  activeBackground: {
    position: 'absolute',
    width: responsive.width(100),
    height: responsive.width(100),
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  component: {
    height: responsive.width(50),
    width: responsive.width(100),
    marginTop: responsive.width(0),
  },
  wrapperContainer: {
    position: 'absolute',
    top: responsive.width(0),
    left: responsive.width(0),
    right: responsive.width(0),
    bottom: responsive.width(0),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTab: {
    ...FONTS.FilterTitle,
    color: colorCommon.white,
    lineHeight: 19,
    fontSize: 16,
  },
});

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}) => {
  // get information about the components position on the screen -----

  const reducer = (state, action) => {
    // Add the new value to the state
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event, index) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    // Our code hasn't finished rendering yet, so we can't use the layout values
    if (layout.length !== routes.length) {
      return 0;
    }
    // We can use the layout values
    // Copy layout to avoid errors between different threads
    return [...layout].find(({index}) => index === activeIndex)?.x;
    // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
    // or the layout changes (e.g. when the components haven't finished rendering yet)
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{translateX: withTiming(xOffset.value, {duration: 500})}],
    };
  });

  return (
    <View style={[styles.tabBar]}>
      <Animated.Image
        resizeMode="cover"
        source={icons.pokeballTopTab}
        style={[styles.activeBackground, animatedStyles]}
      />

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              route={route}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

const TabBarComponent = ({active, route, onLayout, onPress}) => {
  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 500}),
        },
      ],
    };
  });

  const animatedWrapperContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 500}),
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onLayout={onLayout}
      route={route}
      style={styles.component}>
      <Animated.View style={[animatedComponentCircleStyles]} />
      <Animated.View
        style={[styles.wrapperContainer, animatedWrapperContainerStyles]}>
        <Text style={styles.contentTab} numberOfLines={1}>
          {route.name}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export {InforTab};
