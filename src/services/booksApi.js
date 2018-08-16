//TODO: env?
const BASE_URL = 'https://www.googleapis.com/books/v1';
const VOLUMES_URL = `${BASE_URL}/volumes?`;
const BOOK_URL = `${BASE_URL}/volumes`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ term/* , page, perPage */ }) {
  console.log('*****SEARCH*********');
  // const bookIndex = (page * perPage) - perPage;
  const search = `&q=${term}`;
  // const paging = `&maxResults=${perPage}&startIndex=${bookIndex}`;

  //TODO: ${paging} logic
  return get(`${VOLUMES_URL}${search}`);
}

export function getBook(volumeId) {
  console.log('*****getBook********');
  return get(`${BOOK_URL}/${volumeId}`)
    .then(r => r.books);
}