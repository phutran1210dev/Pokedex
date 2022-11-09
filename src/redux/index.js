import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/PokemonReducer';

// Reducer

const store = configureStore({
  reducer: {pokemon: pokemonReducer},
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
  middleware: [thunk, logger],
});

export default store;
