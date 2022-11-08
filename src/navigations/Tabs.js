// Core components
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useReducer, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// svg
import Svg, {Path} from 'react-native-svg';

// reanimated
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';

// Components
import HomeScreen from '../screens/HomeScreen';
import BerryScreen from '../screens/BerryScreen';
import BackPackScreen from '../screens/BackPackScreen';
import RegionsScreen from '../screens/RegionsScreen';

// Icons
import {colorCommon, icons, responsive} from '../constants';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: responsive.width(0),
          left: responsive.width(0),
          right: responsive.width(0),
          top: responsive.width(0),
          elevation: responsive.width(0),
          borderTopColor: 'transparent',
          height: responsive.width(50),
        },
      }}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <Image
              resizeMode="cover"
              ref={ref}
              source={icons.pokedex}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BackPack"
        component={BackPackScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <Image
              resizeMode="cover"
              ref={ref}
              source={icons.backPack}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Berry"
        component={BerryScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <Image
              resizeMode="cover"
              ref={ref}
              source={icons.berry}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Regions"
        component={RegionsScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <Image
              resizeMode="cover"
              ref={ref}
              source={icons.map}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#E2E2E2',
  },
  activeBackground: {
    position: 'absolute',
    left: -2.75,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: responsive.width(60),
    width: responsive.width(60),
    marginTop: responsive.width(0),
  },
  componentCircle: {
    flex: 1,
    borderRadius: responsive.width(30),
    backgroundColor: colorCommon.white,
  },
  iconContainer: {
    position: 'absolute',
    top: responsive.width(0),
    left: responsive.width(0),
    right: responsive.width(0),
    bottom: responsive.width(0),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: responsive.width(35),
    width: responsive.width(35),
  },
});

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}) => {
  const {bottom} = useSafeAreaInsets();

  // get information about the components position on the screen -----

  const reducer = (state, action) => {
    // Add the new value to the state
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);
  // console.log(layout);

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
    // We subtract 25 so the active background is centered behind our TabBar Components
    // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
    // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
    return [...layout].find(({index}) => index === activeIndex)?.x - 25;
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
    <View style={[styles.tabBar, {paddingBottom: bottom}]}>
      <AnimatedSvg
        width={responsive.width(110)}
        height={responsive.width(60)}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}>
        <Path
          fill={colorCommon.white}
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

const TabBarComponent = ({active, options, onLayout, onPress}) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null);

  // useEffect(() => {
  //   if (active && ref?.current) {
  //     ref.current.play();
  //   }
  // }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 500}),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 500}),
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onLayout={onLayout}
      style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}>
        {options.tabBarIcon ? options.tabBarIcon({ref}) : <Text>?</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

export {Tabs};
