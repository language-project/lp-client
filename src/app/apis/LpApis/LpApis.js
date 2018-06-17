import apiMap from './apiMap';
import Axios from '@modules/Axios';
import HttpMethod from '@constants/HttpMethod';

export { URL } from './apiMap';

/**
 * ...
 */
export default class LpApis {
  static [VERSION] = '0.0.1';

  static delete({ 
    data, 
    param,
    url, 
  }) {
    return this.send({
      data,
      method: HttpMethod.DELETE,
      param,
      url,
    });
  }

  static get({ 
    data, 
    param,
    url,
  }) {
    return this.send({
      data,
      method: HttpMethod.GET,
      param,
      url,
    });
  }

  static post({ 
    data, 
    param,
    url,
  }) {
    return this.send({
      data,
      method: HttpMethod.POST,
      param,
      url,
    });
  }

  static send({
    data = {},
    method,
    param,
    url,
  }) {
    if (!method || !url) {
      throw new Error('Api needs to have HTTP method and url specified');
    }

    const api = apiMap[url] && apiMap[url][method];
    if (api && api.data) {
      const dataInContract = {};
      // Select only keys defined in `data` of map.
      Object.keys(api.data).forEach((k) => {
        dataInContract[k] = data[k];    
      });

      return Axios({
        data: dataInContract,
        method,
        url: replace(url, param),
        withCredentials: true,
      });
    } else {
      throw new Error(`API is not defined in apiMap, ${url}`);
    }
  }
};

function replace(url, param = {}) {
  Object.keys(param).map((k) => {
    url = url.replace(`:${k}`, param[k]);
  });
  return url;
}

export const VERSION = Symbol('version');
