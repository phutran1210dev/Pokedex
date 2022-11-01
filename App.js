import React from 'react';
// Core component
import {NavigationContainer} from '@react-navigation/native';

// Store
import {Provider} from 'react-redux';

// Components
import {Tabs} from './src/navigations/Tabs';
import store from './src/redux';

// Navigate

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
