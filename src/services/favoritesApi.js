import { put, get, del } from './request';

const URL = 'https://search-all-the-things-aa2cd.firebaseio.com/';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/id-${id}.json`;

export const addFavorite = ({ id, name, artist }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    id, name, artist
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
    .then(response => {
      return Object.keys(response)
        .map(key => response[key]);
    });
};

export const getFavorite = id => {
  const url = getFavoriteUrl(id);
  return get(url);
};

export const removeFavorite = id => {
  const url = getFavoriteUrl(id);
  return del(url);
};
