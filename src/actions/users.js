import {UPDATE_USER_INFO} from './actionTypes';

export function saveUserToRedux(data, token) {
  return {
    type: UPDATE_USER_INFO,
    data,
    token,
  };
}
