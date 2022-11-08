import {createSlice} from '@reduxjs/toolkit';
// createAsyncThunk
// import {fetchPokemon} from 'api/pokemonList';

// export const getPokemonList = createAsyncThunk(
//   'pokemons/list',
//   async (payload, {fulfillWithValue, dispatch}) => {
//     return fetchPokemon(payload)
//       .then(data => {
//         return data.json().then(res =>
//           res.results.forEach(item => {
//             console.log('item');
//             // dispatch(getEachItemCategoryList(item));
//           }),
//         );
//       })
//       .catch(error => error);
//   },
// );

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    data: [],
    limit: 20,
    offset: 0,
    loading: false,
    success: false,
    error: '',
  },
  reducers: {
    resetData(state) {
      state.data = [];
      state.loading = false;
      state.success = false;
      state.error = '';
    },
    setLimit(state) {
      state.limit = 20;
    },
    setOffset(state) {
      state.offset += 20;
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(getPokemonList.pending, (state, payload) => {
  //       state.loading = true;
  //       console.log(payload);
  //     })
  //     .addCase(getPokemonList.fulfilled, (state, payload) => {
  //       state.loading = false;
  //       state.data.push(state);
  //       console.log('state', state);
  //       console.log('payload', payload);
  //     })
  //     .addCase(getPokemonList.rejected, (state, payload) => {
  //       state.loading = false;
  //       console.log('payload', payload);
  //     });
  // },
});
export const {resetData, setLimit, setOffset} = pokemonSlice.actions;
export default pokemonSlice.reducer;
