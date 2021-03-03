// == Import : local
import { CHANGE_THEME } from '../actions/theme';

const initialState = {
  test: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        test: !state.test,
      };
    default:
      return state;
  }
};

export default reducer;
