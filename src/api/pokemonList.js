import ApiRequest from './index';

export function fetchPokemon(payload) {
  return ApiRequest.get(`/${payload.type}`, payload);
}
