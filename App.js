import React from 'react';
// Core component
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Store
import {Provider} from 'react-redux';

// Components
import {Tabs} from './src/navigations/Tabs';
import store from './src/redux';
import {RegionPlace} from 'src/screens/Regions';
import {PokemonList} from 'src/screens/Pokemon/PokemonList';

// Navigate
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="PokemonList" component={PokemonList} />
            <Stack.Screen name="Region" component={RegionPlace} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
