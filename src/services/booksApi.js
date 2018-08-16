//TODO: env?
const BASE_URL = 'https://www.googleapis.com/books/v1';
const VOLUMES_URL = `${BASE_URL}/volumes?`;
const BOOK_URL = `${BASE_URL}/volumes`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

/* TODO: test file? */
export function search({ term, page, perPage }) {
  const bookIndex = (page * perPage) - perPage;
  const search = `&q=${term}`;
  const paging = `&maxResults=${perPage}&startIndex=${bookIndex}`;

  return get(`${VOLUMES_URL}${search}${paging}`);
}

export function getBook(volumeId) {
  return get(`${BOOK_URL}/${volumeId}`)
    .then(r => r.books);
}