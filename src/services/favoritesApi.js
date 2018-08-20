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