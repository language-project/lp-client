import ActionType from '@constants/ActionType';
import Credential from '@models/data/Credential';
import { ERROR, SUCCESS } from '@modules/Aktion';

const initialState = {
  credential: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS(ActionType.REQUEST_SIGN_IN_USER):
      return {
        ...state,
        credential: Credential.of(action.payload),
      };
    default:
      return state;
  }
};
