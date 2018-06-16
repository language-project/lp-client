import { combineReducers } from 'redux';

import authReducer from './authReducer';
import networkReducer from './networkReducer';

export default combineReducers({
  authReducer,
  networkReducer,
});
