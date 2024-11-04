import * as types from '../types';

const persistedUser = localStorage.getItem('User');

const initialState = {
  currentUser: persistedUser ? { email: persistedUser } : null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return { ...state, currentUser: action.payload };
    }

    case types.LOGOUT: {
      return { ...state, currentUser: null };
    }

    default: {
      return state;
    }
  }
}
