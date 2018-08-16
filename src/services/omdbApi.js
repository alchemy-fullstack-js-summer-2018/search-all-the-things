const API_KEY = '2156e816';
const API_QUERY = `apikey=${API_KEY}`;
const BASE_URL = 'https://www.omdbapi.com';
const EVERYTHING_URL = `${BASE_URL}/?${API_QUERY}`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search(searchTerm, page = 1) {
  const search = `&s=${searchTerm}`;
  const paging = `&page=${page}`;

  return get(`${EVERYTHING_URL}${search}${paging}`);
}