import {Platform} from 'react-native';

const isIos = Platform.OS === 'ios';

const SIZES = {
  // global sizes
  base: 8,
  spacing: 10,
  radius: 12,
  padding: 20,

  // font sizes
  Title: 100,
  ApplicationTitle: 32,
  PokemonNam: 26,
  FilterTitle: 16,
  Description: 16,
  PokemonNumber: 12,
  PokemonType: 12,
};

const FONTS = {
  ApplicationTitle: {
    fontFamily: isIos ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    fontSize: SIZES.ApplicationTitle,
    lineHeight: 38,
  },
  PokemonName: {
    fontFamily: isIos ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    fontSize: SIZES.PokemonNam,
    lineHeight: 30,
  },
  FilterTitle: {
    fontFamily: isIos ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    fontSize: SIZES.FilterTitle,
    lineHeight: 30,
  },
  Description: {
    fontFamily: isIos ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
    fontSize: SIZES.Description,
    lineHeight: 18.75,
  },
  PokemonNumber: {
    fontFamily: isIos ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    fontSize: SIZES.PokemonNumber,
    lineHeight: 14,
  },
  PokemonType: {
    fontFamily: isIos ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    fontSize: SIZES.PokemonType,
    lineHeight: 14,
  },
  CustomFont: {
    fontFamily: isIos ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    fontSize: SIZES.Description,
    lineHeight: 30,
  },
};

export {FONTS, SIZES};
