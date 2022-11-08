import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const iPad = Platform.OS === 'ios' && Platform.isPad;
export const isTabletAndroid =
  Platform.OS === 'android' && DeviceInfo.isTablet();
