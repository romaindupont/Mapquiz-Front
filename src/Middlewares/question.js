/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// == Import : npm
import axios from 'axios';

// == Import : local
import {
  FETCH_QUESTION,
  saveQuestion,
  FETCH_AVATARS,
  saveAvatars,
  FETCH_TROPHIES,
  saveTrophies,
} from '../actions/questionForm';

const question = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUESTION:
    {
      // eslint-disable-next-line no-unused-vars
      const state = store.getState();

      axios.get(`/question/category/${action.id_category}`, {
        baseURL: 'https://mapquizbackend.herokuapp.com',
      })
        .then((response) => {
          store.dispatch(saveQuestion(response.data));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case FETCH_AVATARS:
    {
      const state = store.getState();
      axios.get('/avatars', {
        baseURL: 'https://mapquizbackend.herokuapp.com',
      })
        .then((response) => {
          store.dispatch(saveAvatars(response.data));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case FETCH_TROPHIES:
    {
      const state = store.getState();
      axios.get(`user/trophies/${state.user.id_user}`, {}, {
        baseURL: 'https://mapquizbackend.herokuapp.com',
        headers: { Authorization: `bearer ${localStorage.getItem('tokenId')}` },
      })
        .then((response) => {
          store.dispatch(saveTrophies(response.data));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default question;
