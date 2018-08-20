import { put, get, del } from './request';

const URL = 'https://rbt-search-the-web.firebaseio.com/';
const FAVORITES_URL = `${URL}/favorites.json`;

const getFavoriteUrl = id => `${URL}/favorites/${id}.json`;

export const addFavorite = ({ title, authors, thumbnail }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    title, 
    authors, 
    thumbnail
  });
};