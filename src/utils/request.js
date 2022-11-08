import {stringify} from 'qs';

export class Request {
  static create(options) {
    return new Request(options);
  }

  constructor(options) {
    this._options = options;
  }

  get(url, params) {
    return this._request({
      method: 'GET',
      url,
      params,
    });
  }

  post(url, data, params) {
    return this._request({
      method: 'POST',
      url,
      params,
    });
  }

  async _request(requestOptions) {
    let {method, url, params = null} = requestOptions;
    url = this._options.endpoint + url;

    if (params) {
      url += `?${stringify(params)}`;
    }

    if (['POST', 'PUT', 'DELETE'].includes(method)) {
    }

    const res = await fetch(url, params);
    if (!res.ok) {
      throw res;
    }
    try {
      return res;
    } catch (error) {
      return error;
    }
  }
}
