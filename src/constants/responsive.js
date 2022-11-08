import {Dimensions, PixelRatio} from 'react-native';
import {iPad, isTabletAndroid} from 'src/utils/checkDevice';

const {width: DEVICE_SCREEN_WIDTH, height: DEVICE_SCREEN_HEIGHT} =
  Dimensions.get('screen');

/**
 * DESIGN_SCREEN_WIDTH: number
 * Width of screen on figma
 */
const DESIGN_SCREEN_WIDTH = 375;

/**
 * DESIGN_SCREEN_HEIGHT: number
 * Height of screen on figma
 */
const DESIGN_SCREEN_HEIGHT = 875;

/**
 * Get width for each devices
 * @param {Number} designWidth - the width on the design
 * Recommend use this function rather "height" function
 */
const width = designWidth => {
  const elemWidth =
    typeof designWidth === 'number' ? designWidth : parseFloat(designWidth);
  const tabletWidth = iPad || isTabletAndroid ? 2 : 1;
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_WIDTH * elemWidth) / tabletWidth / DESIGN_SCREEN_WIDTH,
  );
};

/**
 * Get height for each devices
 * @param {Number} designHeight - the height on the design
 * If in a screen has used both width and height, the UI might be wrong on Tablet.
 * Recommend using "width" function
 */
const height = designHeight => {
  const elemHeight =
    typeof designHeight === 'number' ? designHeight : parseFloat(designHeight);
  return PixelRatio.roundToNearestPixel(
    (DEVICE_SCREEN_HEIGHT * elemHeight) / DESIGN_SCREEN_HEIGHT,
  );
};

const responsive = {
  width,
  height,
  WIDTH: DEVICE_SCREEN_WIDTH,
  HEIGHT: DEVICE_SCREEN_HEIGHT,
};

export {responsive};
