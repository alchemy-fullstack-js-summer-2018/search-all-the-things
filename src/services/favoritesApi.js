import { put, get, del } from './request';

const URL = 'https://rbt-search-the-web.firebaseio.com';
const FAVORITES_URL = `${URL}/favorites.json`;

const getFavoriteUrl = id => `${URL}/favorites/${id}.json`;

export const addFavorite = ({ id, volumeInfo }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    id,
    title: volumeInfo.title, 
    authors: volumeInfo.authors, 
    thumbnail:  volumeInfo.imageLinks.thumbnail
  });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}`)
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