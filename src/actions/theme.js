/* eslint-disable camelcase */
export const CHANGE_THEME = 'CHANGE_THEME';
export const changeTheme = () => ({
  type: CHANGE_THEME,

});

export const IS_CONNECTED = 'IS_CONNECTED';
export const isConnected = () => ({
  type: IS_CONNECTED,
});

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (nickname, id_user, level, avatar_id) => ({
  type: SAVE_USER,
  nickname,
  id_user,
  level,
  avatar_id,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, key) => ({
  type: CHANGE_VALUE,
  newValue,
  key,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const REGISTRATION_USER = 'REGISTRATION_USER';
export const registrationUser = () => ({
  type: REGISTRATION_USER,
});

export const REGISTRATION = 'REGISTRATION';
export const registration = (id_avatar) => ({
  type: REGISTRATION,
  id_avatar,
});

export const REDIRECTION = 'REDIRECTION';
export const redirection = () => ({
  type: REDIRECTION,
});

export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const unsubscribe = (id_user) => ({
  type: UNSUBSCRIBE,
  id_user,
});

export const CHANGE_INFO = 'CHANGE_INFO';
export const changeInfo = (avatar_id) => ({
  type: CHANGE_INFO,
  avatar_id,
});

export const CHANGE_VIEW_SIDE_BAR = 'CHANGE_VIEW_SIDE_BAR';
export const changeViewSideBar = () => ({
  type: CHANGE_VIEW_SIDE_BAR,
});

export const CLOSE_SIDE_BAR = 'CLOSE_SIDE_BAR';
export const closeSideBar = () => ({
  type: CLOSE_SIDE_BAR,
});

export const SAVE_ERROR = 'SAVE_ERROR';
export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});
