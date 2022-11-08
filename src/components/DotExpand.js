import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {colorsType, responsive, SIZES} from 'src/constants';

const cardWidth = responsive.WIDTH - responsive.width(40);
const DotExpand = ({index, dotPosition}) => {
  const dotStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = interpolate(
      dotPosition.value / cardWidth,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );

    const width = interpolate(
      dotPosition.value / cardWidth,
      inputRange,
      [10, 20, 10],
      Extrapolation.CLAMP,
    );
    return {opacity, width};
  });
  return (
    <Animated.View key={`dot-${index}`} style={[StyleDot.Dot, dotStyle]} />
  );
};

const StyleDot = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: responsive.WIDTH / 2 - 50,
    flexDirection: 'row',
  },
  Dot: {
    borderRadius: SIZES.radius,
    marginHorizontal: 3,
    width: 10,
    height: 10,
    backgroundColor: colorsType.fighting,
  },
});

export default DotExpand;
