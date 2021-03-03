// == Import : local
import {
  CHANGE_VIEW_SIDE_BAR,
  CLOSE_SIDE_BAR,
} from '../actions/theme';

const initialState = {
  hide: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VIEW_SIDE_BAR:
      return {
        ...state,
        hide: false,
      };
    case CLOSE_SIDE_BAR:
      return {
        ...state,
        hide: true,
      };
    default:
      return state;
  }
};

export default reducer;
