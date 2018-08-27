import { put, get, del } from './request';

const URL = 'https://search-all-things2.firebaseio.com/';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/id-${id}.json`;

export const addFavorite = ({ imdbID, Title, Poster, Year, Plot }) => {
  const url = getFavoriteUrl(imdbID);
  return put(url, {
    imdbID, Title, Poster, Year, Plot
  });
};
export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
    .then(res => {
      return Object.keys(res)
        .map(key => res[key]);
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
