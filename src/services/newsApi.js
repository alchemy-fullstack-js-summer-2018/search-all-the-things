const API_KEY = process.env.NEWS_API_KEY;//eslint-disable-line
const API_QUERY = `apiKey=${API_KEY}`;
const BASE_URL = 'https://newsapi.org/v2';
const EVERYTHING_URL = `${BASE_URL}/everything?${API_QUERY}`;
const SOURCES_URL = `${BASE_URL}/sources?${API_QUERY}`;
const SORT_QUERY = 'sortBy=publishedAt';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ search, sources = [] }, { page = 1, pageSize = 15 } = {}) {
  const query = `&q=${search}&sources=${sources.join()}`;
  const paging = `&page=${page}&pageSize=${pageSize}`;
  const sort = `&${SORT_QUERY}`;

  return get(`${EVERYTHING_URL}${query}${paging}${sort}`);
}

export function getSource() {
  return get(SOURCES_URL).then(r => r.sources);
}