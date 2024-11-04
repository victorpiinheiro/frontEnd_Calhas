import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
