// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import mondeReducer from './monde';
import menuReducer from './menu';
import questionFormReducer from './questionForm';
import sideBarReducer from './sideBar';
import userReducer from './user';

const rootReducer = combineReducers({
  monde: mondeReducer,
  menu: menuReducer,
  questionForm: questionFormReducer,
  user: userReducer,
  sideBar: sideBarReducer,
});

export default rootReducer;
