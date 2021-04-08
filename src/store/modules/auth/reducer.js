import {LOGIN, LOGOUT, LOGINERROR} from  '../types'

const INITIAL_STATE = {
  token: null
  };

// auth reducer
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
      case LOGIN:
          return {...state, token: action.payload.token };
      case LOGINERROR:
          return {...state, error: action.payload.error};
      case LOGOUT:
          return INITIAL_STATE;
      default:
          return state;
  }
}
