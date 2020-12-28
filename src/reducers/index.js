import userReducer from './userReducer';
import {combineReducers} from 'redux';
// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
