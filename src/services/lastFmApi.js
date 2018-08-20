require('dotenv').config();
const API_KEY = process.env.API_KEY;
const API_QUERY = `method=album.search&album=moon&apiKey=${API_KEY}&format=json`;
import { get } from './request';
const BASE_URL = process.env.BASE_URL;
const EVERYTHING_URL = `${BASE_URL}/?${API_QUERY}`; 

const getUrl = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return get(url)
    .then(response => {
      window.localStorage.setItem(url, JSON.stringify(response));
      return response;
    });
};

export function getAlbums(name) {
  if(name) {
    return getUrl(`${EVERYTHING_URL}/${name}`);
  }
  else {
    return getUrl(`${EVERYTHING_URL}`);
  }
}