import Logger from '@modules/Logger';
import Network from '@constants/Network';
import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';

/**
 * ...
 */
export default class Aktion {
  _baseType;
  _basePayload;
  _dispatch;
  _promise;

  constructor(baseType) {
    if (baseType === undefined) throw new Error('Aktion needs action type');
    this._basePayload = {};
    this._baseType = baseType;
  }

  static of(baseType) {
    return new Aktion(baseType);
  }

  async(promise) {
    this._promise = promise;
    return this;
  }

  basePayload(payload) {
    this._basePayload = payload;
    return this;
  }

  dispatcher(dispatch) {
    this._dispatch = dispatch;
    return this;
  }

  async fire() {
    if (this._dispatch === undefined) throw new Error('Aktion needs a dispatcher');
    const requestId = createRequestId(this._baseType, this._basePayload.componentId);

    this._dispatch({
      payload: {
        ...this._basePayload,
        network: this._promise === undefined ? undefined : Network.REQUEST,
        requestId,
      },
      type: this._baseType,
    });

    if (this._promise !== undefined) {
      try {
        const result = await this._promise;
        this._dispatch({
          payload: {
            ...selectAxiosPayload(result),
            network: this._promise === undefined ? undefined : Network.COMPLETED,
            requestId,
          },
          type: SUCCESS(this._baseType),
        });

        return {
          actionType: this._baseType,
        };
      } catch (err) {
        Logger.error(err);
        this._dispatch({
          error: true,
          payload: {
            ...selectAxiosError(err),
            network: this._promise === undefined ? undefined : Network.COMPLETED,
            requestId,
          },
          type: ERROR(this._baseType),
        });

        return {
          actionType: this._baseType,
          error: true,
        };
      }
    }
  }
};

export function SUCCESS(type) {
  return type + '_SUCCESS';
};

export function ERROR(type) {
  return type + '_ERROR';
};

export function createRequestId(actionType, componentId = '') {
  return actionType + `@${componentId}`;
};
