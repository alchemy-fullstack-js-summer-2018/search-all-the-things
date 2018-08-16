// const API_KEY = 'AIzaSyAK1eyxkoDwtV0nYOjaJ9qDVI21pW8uCNg';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
// const EVERYTHING_URL = `${BASE_URL}?=${SEARCH_TERM}`

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search(searchTerm) {

  return get(`${BASE_URL}?=${searchTerm}`);
}