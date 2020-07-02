import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Conduit',
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true
      };
    default:
      return state;
  }
};
