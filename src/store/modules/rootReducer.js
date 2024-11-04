import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';
import user from './User/reducer';

export default combineReducers({
  example: exampleReducer,
  user,
});
