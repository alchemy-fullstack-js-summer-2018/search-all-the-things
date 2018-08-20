// import { get, search } from './request';

const API_KEY = '9ff12e67d0cd5b5a51730b280660b0fc';
const API_QUERY = `api_key=${API_KEY}&format=json`;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/?method=album.search';

const throwJson = json => { throw json; };

const get = url => {
  console.log('**** inside the get');
  const json = window.localStorage.getItem(url);
  console.log('**** json', json);

  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }
  
  return fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson))
    .then(response => {
      const albumResults = response.results.albummatches.album;
      window.localStorage.setItem(url, JSON.stringify(albumResults));
      console.log(albumResults);
      return albumResults;
    });
  
};

export default function search(search) {
  const query = `&album=${search}`;
  const EVERYTHING_URL = `${BASE_URL}${query}&${API_QUERY}`; 

  return get(`${EVERYTHING_URL}${query}`);
}