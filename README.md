# Pokedex App

## Project Pokedex

- Project create by **Phú Trần**.
- Contact:
  - [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/phutran1210dev)
  - [![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://www.facebook.com/tranphu1210/)




## API Pokemon
Pokemon API : [Pokedex](https://pokeapi.co/)

### Overview

- [inspiration](https://dribbble.com/shots/4862523-Pokedex-iOS-app-Squirtle) - Thanks for Daniel Motta
- [Download Design](https://www.sketchappsources.com/free-source/3989-pokedex-app-sketch-freebie-resource.html)

|     Design     | Link                                                                                          |         Status         |
| :------------: | :-------------------------------------------------------------------------------------------- | :--------------------: |
| Pokedex Design | [Design](https://www.figma.com/file/JN7DiX74onUKDsKU6kMg5c/Pok%C3%A9dex-App-RN?node-id=0%3A1) | 0% :hammer_and_wrench: |

### On Working

In process

### Preview Screen

- Preview Screen
  - <img src="https://github.com/phutran1210dev/Pokedex/blob/master/src/assets/Screens/Pokemon_sceen%2311:11.gif" width="376" height="100%">
- PokemonList Screen
  - <img src="https://github.com/phutran1210dev/Pokedex/blob/master/src/assets/Screens/home_screen.png" width="376" height="100%">
- PokemonList Screen
  - <img src="https://github.com/phutran1210dev/Pokedex/blob/master/src/assets/Screens/PokemonList_screen.png" width="376" height="100%">
- Pokemon Detail Screen #InProcess
  - <img src="https://github.com/phutran1210dev/Pokedex/blob/master/src/assets/Screens/PokemonDetail_screen%2311_11.png" width="376" height="100%">

## Structure Folder

```javascript
  src
    api
    assets       /* Fonts, Icon,.... */
    components
    configs      /* Seting somethings & const baseUrl API */
    constants    /*Define color, fonts, icon, responsive device*/
    data         /* Dummy Data*/
    navigations  /* Settup navigate Tab-bottom react native*/
    redux
      Slices     /* Slice Redux <=> reducer && action */
    './index.js' /* Store */
    screens      /* Define screen <=> page */
    utils        /* Define utils functions*/
```

### Dependencies:

```javascript
    "@react-navigation/bottom-tabs": "^6.4.0",
    "@react-navigation/native": "^6.0.13",
    "@react-navigation/native-stack": "^6.9.1",
    "@reduxjs/toolkit": "^1.8.6",
    "axios": "^0.26.0",
    "babel-plugin-module-resolver": "^4.1.0",
    "lodash": "^4.17.21",
    "lottie-react-native": "^5.1.4",
    "qs": "^6.11.0",
    "react": "18.1.0",
    "react-native": "0.70.4",
    "react-native-device-info": "^10.3.0",
    "react-native-linear-gradient": "^2.6.2",
    "react-native-reanimated": "^2.12.0",
    "react-native-safe-area-context": "^4.4.1",
    "react-native-screens": "^3.18.2",
    "react-native-svg": "^13.4.0",
    "react-native-vector-icons": "^9.2.0",
    "react-redux": "^8.0.4",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1"
```

### DevDependencies:

```javascript
    "@babel/core": "^7.12.9",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "babel-jest": "^26.6.3",
    "eslint": "^7.32.0",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "0.72.3",
    "react-test-renderer": "18.1.0"
```
## Available Scripts

```javscript
  npm run start   || yarn start
  npm run ios     || yarn ios
  npm run android || yarn android

```

```javscript
  module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'], // <- your assets folder's path
};

```

### At the terminal
  - At folder root terminal run this script
  - `npx react-native-asset` && `cd ios/ && pod install`