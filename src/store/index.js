// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import ajax from '../Middlewares/ajax';
import question from '../Middlewares/question';

// == Import : local
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(ajax, question),
));

export default store;
