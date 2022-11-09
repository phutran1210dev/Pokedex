import axios from 'axios';
import {baseUrl} from '../configs';

export function fetchPokemon(params) {
  return axios({
    method: 'GET',
    params,
    url: '/pokemon',
    baseURL: baseUrl,
  });
}
