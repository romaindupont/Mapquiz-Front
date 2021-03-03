/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// == Import : npm
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// == Import : local
import {
  LOGIN,
  LOGOUT,
  saveUser,
  logoutUser,
  // registrationUser,
  REGISTRATION,
  redirection,
  UNSUBSCRIBE,
  CHANGE_INFO,
  saveError,
} from '../actions/theme';

import { saveLevel, LEVEL_UP } from '../actions/questionForm';

axios.defaults.baseURL = 'https://mapquizbackend.herokuapp.com';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
    {
      toast.configure();
      const notify = (message) => toast(message);
      const state = store.getState();
      axios.post('/signin', {
        email: state.user.email,
        password: state.user.password,
        id_user: state.user.id_user,
        level: state.user.level,
        avatar_id: state.user.avatar_id,
      }, {
        baseURL: 'https://mapquizbackend.herokuapp.com',
      })
        .then((response) => {
          // action à créer
          localStorage.setItem('tokenId', response.data.token);
          axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          store.dispatch(saveUser(response.data.nickname, response.data.id_user, response.data.level, response.data.id_avatar));
          notify('Connexion réussie');
        })
        .catch((error) => {
          store.dispatch(saveError(error.response.data.message));
          console.error('Error', error.response);
          notify(error.response.data.message);
        });
      break;
    }
    case LOGOUT:
    {
      axios.post('/signout');
      localStorage.clear();
      store.dispatch(logoutUser());
      delete axios.defaults.headers.common.Authorization;
      break;
    }
    case REGISTRATION:
    {
      toast.configure();
      const notify = (message) => toast(message);
      const state = store.getState();
      // eslint-disable-next-line prefer-destructuring
      const id_avatar = action.id_avatar;

      axios.post('/subscribe', {
        password: state.user.password,
        password2: state.user.password2,
        nickname: state.user.nickname,
        email: state.user.email,
        id_avatar,
      },
      {
        baseURL: 'https://mapquizbackend.herokuapp.com',
      })
        .then((response) => {
          // action à créer
          store.dispatch(redirection());
          console.log(response);
          axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        })
        .catch((error) => {
          console.error('Error', error);
          notify(error.response.data.message);
        });
      break;
    }
    case UNSUBSCRIBE:
    {
      const state = store.getState();
      const token = localStorage.getItem('tokenId');
      console.log(state.user.password, state.user.id_user);
      axios.delete(`/user/remove/${state.user.id_user}`, {
        data: {
          password: state.user.password,
          email: state.user.email,
        },
      }, {
        baseURL: 'https://mapquizbackend.herokuapp.com',
        headers: {
          Authorization: `bearer ${localStorage.getItem('tokenId')}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case LEVEL_UP:
    {
      toast.configure();
      const notify = (message) => toast(message);
      const state = store.getState();
      axios.patch(`/user/level/${state.user.id_user}`, {},
        {
          baseURL: 'https://mapquizbackend.herokuapp.com',
          headers: { Authorization: `bearer ${localStorage.getItem('tokenId')}` },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveLevel(response.data.level));
          notify(response.data.message);
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case CHANGE_INFO:
    {
      toast.configure();
      const notify = (message) => toast(message);
      const state = store.getState();
      // eslint-disable-next-line prefer-destructuring
      axios.put(`/user/update/${state.user.id_user}`, {
        password: state.user.password,
        password2: state.user.password2,
        nickname: state.user.nickname,
        email: state.user.email,
        id_avatar: action.avatar_id,
      },
      {
        baseURL: 'https://mapquizbackend.herokuapp.com',
        headers: { Authorization: `bearer ${localStorage.getItem('tokenId')}` },
      })
        .then((response) => {
          notify('Information modifiée !');
        })
        .catch((error) => {
          console.error('Error', error);
          notify(error.response.data.message);
        });
      break;
    }
    default:
      next(action);
  }
};

export default ajax;
