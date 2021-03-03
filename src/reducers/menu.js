/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// == Import : local
import {
  IS_CONNECTED,
  TOGGLE_OPEN,
  LOGOUT,
} from '../actions/theme';

const initialState = {
  open: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CONNECTED:
      return {
        ...state,
        isConnected: !state.isConnected,
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;
