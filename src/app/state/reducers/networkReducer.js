import ActionType from '@constants/ActionType';
import { ERROR, SUCCESS } from '@modules/Aktion';
import Logger from '@modules/Logger';
import Network from '@constants/Network';

function onSucceed({
  action,
  factory,
  state,
}) {
  return {
    ...state,
    data: {
      ...state.data,
      [action.payload.requestId]: factory(action.payload.data),
    },
    // dataFetchInProgress: Network.COMPLETED,
  }
}

const initialState = {
  data: {},
  dataFetchInProgress: {},
};

const _factory = (data) => {
  console.log('data', data);
  return {
    data,
  };
};

export default function (state = initialState, action) {
  try {
    switch (action.type) {
      case SUCCESS(ActionType.REQUEST_GET_DEFINITIONS):
        return onSucceed({
          action,
          factory: _factory,
          state,
        });
      case SUCCESS(ActionType.REQUEST_GET_DEFINITIONS_BY_ID):
        return onSucceed({
          action,
          factory: _factory,
          state,
        });
      case SUCCESS(ActionType.REQUEST_GET_COMMENTS):
        return onSucceed({
          action,
          factory: _factory,
          state,
        });
      default:
        return state;
    }
  } catch (err) {
    Logger.error(err);
  }
};
