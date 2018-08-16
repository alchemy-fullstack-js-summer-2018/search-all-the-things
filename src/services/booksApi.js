//TODO: sort out env variables (no api key needed for google books)
// const API_QUERY = '';?
// everything, sources, sort query?

const BASE_URL = 'https://www.googleapis.com/books/v1'; //search by volumes

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ /* TODO */ topic, sources = ['bad'] }, { page = 1, pageSize = 20 }) {
  const search = `&q=${topic}&sources=${sources.join()}`;
  const paging = `&page=${page}&pageSize=${pageSize}`;

  return get(`${EVERTHING_URL}${search}${paging}${sort}`);
}

//get sources fn?
