// == Import : local
import { SAVE_QUESTION, SAVE_AVATARS, SAVE_TROPHIES } from '../actions/questionForm';

const initialState = {
  list: [],
  id_category: 0,
  loading: true,
  listOfAvatars: [],
  load: true,
  listOfTrophies: [],
  waitTrophies: true,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTION:
      return {
        ...state,
        list: action.questions,
        loading: false,
      };
    case SAVE_AVATARS:
      return {
        ...state,
        listOfAvatars: action.avatars,
        load: false,
      };
    case SAVE_TROPHIES:
      return {
        ...state,
        listOfTrophies: action.trophies,
        waitTrophies: false,
      };
    default:
      return state;
  }
};

export default reducer;
