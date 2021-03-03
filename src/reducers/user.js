/* eslint-disable indent */
// == Import : local
import {
  CHANGE_VALUE,
  SAVE_USER,
  LOGOUT_USER,
  REDIRECTION,
  SAVE_ERROR,
} from '../actions/theme';

import { SAVE_LEVEL } from '../actions/questionForm';

const initialState = {
  email: '',
  password: '',
  password2: '',
  nickname: '',
  isConnected: false,
  avatar_id: '',
  redirection: false,
  token: '',
  level: '',
  id_user: null,
  error: [],
  waitError: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case SAVE_USER:
      return {
        ...state,
        isConnected: true,
        nickname: action.nickname,
        id_user: action.id_user,
        avatar_id: action.avatar_id,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isConnected: false,
        nickname: '',
      };
    case SAVE_ERROR:
       return {
         ...state,
        error: action.error,
        waitError: false,
       };
    case REDIRECTION:
      return {
        ...state,
        redirection: true,
      };
    case SAVE_LEVEL:
      return {
        ...state,
        level: action.level,
      };
    // case SAVE_INFO:
    //   return {
    //     ...state,
    //     isConnected: true,
    //     password: action.password,
    //     password2: action.password2,
    //     nickname: action.nickname,
    //     avatar_id: action.avatar_id,
    //   };
    default:
      return state;
  }
};

export default reducer;
