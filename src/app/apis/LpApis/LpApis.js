import apiMap from './apiMap';
import Axios from '@modules/Axios';
import HttpMethod from '@constants/HttpMethod';

export { URL } from './apiMap';

/**
 * ...
 */
export default class LpApis {
  static [VERSION] = '0.0.1';

  static delete({ data, url }) {
    return this.send({
      data,
      method: HttpMethod.DELETE,
      url,
    });
  }

  static get({ data, url }) {
    return this.send({
      data,
      method: HttpMethod.GET,
      url,
    });
  }

  static post({ data, url }) {
    return this.send({
      data,
      method: HttpMethod.POST,
      url,
    });
  }

  static send({
    data = {},
    method,
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
        url,
        withCredentials: true,
      });
    } else {
      throw new Error(`API is not defined in apiMap, ${url}`);
    }
  }
};

export const VERSION = Symbol('version');
