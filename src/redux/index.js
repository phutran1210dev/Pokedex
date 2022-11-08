import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/PokemonReducer';

// Reducer

const store = configureStore({
  reducer: {pokemon: pokemonReducer},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
