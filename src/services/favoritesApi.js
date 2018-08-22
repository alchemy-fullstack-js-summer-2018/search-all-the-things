import { put, get, del } from './request';

const URL = 'https://search-all-the-things-aa2cd.firebaseio.com/';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = mbid => `${FAVORITES_URL}/mbid-${mbid}.json`;

export const addFavorite = ({ mbid, name, artist }) => {
  const url = getFavoriteUrl(mbid);
  return put(url, {
    mbid, name, artist
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
    .then(response => {
      return Object.keys(response)
        .map(key => response[key]);
    });
};

export const getFavorite = mbid => {
  const url = getFavoriteUrl(mbid);
  return get(url);
};

export const removeFavorite = mbid => {
  const url = getFavoriteUrl(mbid);
  return del(url);
};
