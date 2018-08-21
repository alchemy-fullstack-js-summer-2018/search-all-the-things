// import { get, search } from './request';

const API_KEY = '9ff12e67d0cd5b5a51730b280660b0fc';
const API_QUERY = `api_key=${API_KEY}&format=json`;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/?method=album.search';
const DETAIL_URL = 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo';


const throwJson = json => { throw json; };

const getUrl = url => {
  console.log('**** inside the get');
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    let res = Promise.resolve(response.albummatches.album);
    return res;

  }
  
  return fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson))
    .then(response => {
      // const albumResults = response.albummatches;
      window.localStorage.setItem(url, JSON.stringify(response));
      return response.albummatches;
    });
  
};

export function search(search) {
  const query = `&album=${search}`;
  const EVERYTHING_URL = `${BASE_URL}${query}&${API_QUERY}`; 
  console.log('*** Everything', EVERYTHING_URL);
  return getUrl(`${EVERYTHING_URL}${query}`);
}

export function albumDetails(mbid) {
  let detailQuery = `&album=${search}`;
  const FULL_DETAIL_URL = `${DETAIL_URL}${detailQuery}&${API_QUERY}`;

  if(mbid) {
    return getUrl(`${FULL_DETAIL_URL}&${mbid}`);
  } 
  else {
    return getUrl(`${FULL_DETAIL_URL}`);
  }
}