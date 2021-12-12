import { combineReducers } from 'redux';
import authReducer from './auth';
import summaryReducer from './summary';

export default combineReducers({
  auth: authReducer,
  summary: summaryReducer,
});
