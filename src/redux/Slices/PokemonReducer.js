import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {fetchPokemon} from '../../api/pokemonList';

export const getPokemonList = createAsyncThunk(
  'pokemons/list',
  async (payload, {fulfillWithValue, dispatch}) => {
    try {
      const formatData = [];
      const {data} = await fetchPokemon();
      const {results} = data;
      const _results = results;

      const promisses = results.map(item => axios.get(item.url));
      let dataDetail = await Promise.all(promisses).then(list => {
        return list;
      });
      _results.forEach((item, index) => {
        let pokeDetail = {
          ..._results[index],
          detail: dataDetail[index].pokeDetail,
        };
        delete pokeDetail.url;
        formatData[index] = pokeDetail;
      });
      return dataDetail;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

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
  extraReducers: builder => {
    builder
      .addCase(getPokemonList.pending, (state, action) => {
        state.loading = true;
        state.loading = action.payload;
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export const {resetData, setLimit, setOffset} = pokemonSlice.actions;
export default pokemonSlice.reducer;
