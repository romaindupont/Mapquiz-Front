/* eslint-disable camelcase */
export const FETCH_QUESTION = 'FETCH_QUESTION';
export const fetchQuestion = (id_category) => ({
  type: FETCH_QUESTION,
  id_category,
});

export const SAVE_QUESTION = 'SAVE_QUESTION';
export const saveQuestion = (questions) => ({
  type: SAVE_QUESTION,
  questions,
});

export const FETCH_AVATARS = 'FETCH_AVATARS';
export const fetchAvatars = (id_avatar) => ({
  type: FETCH_AVATARS,
  id_avatar,
});

export const SAVE_AVATARS = 'SAVE_AVATARS';
export const saveAvatars = (avatars) => ({
  type: SAVE_AVATARS,
  avatars,
});

export const LEVEL_UP = 'LEVEL_UP';
export const levelUp = (id_user) => ({
  type: LEVEL_UP,
  id_user,
});

export const SAVE_LEVEL = 'SAVE_LEVEL';
export const saveLevel = (level) => ({
  type: SAVE_LEVEL,
  level,
});

export const FETCH_TROPHIES = 'FETCH_TROPHIES';
export const fetchTrophies = (id_user) => ({
  type: FETCH_TROPHIES,
  id_user,
});

export const SAVE_TROPHIES = 'SAVE_TROPHIES';
export const saveTrophies = (trophies) => ({
  type: SAVE_TROPHIES,
  trophies,
});
