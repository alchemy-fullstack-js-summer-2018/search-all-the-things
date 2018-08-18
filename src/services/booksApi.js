//TODO: env?
const BASE_URL = 'https://www.googleapis.com/books/v1';
const VOLUMES_URL = `${BASE_URL}/volumes?`;
const BOOK_URL = `${BASE_URL}/volumes`;

const throwJson = json => { throw json; };

const get = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson))
    .then(response => {
      window.localStorage.setItem(url, JSON.stringify(response));
      return response;
    });
};

export function search(searchParams) {
  console.log('*****SEARCH*********', searchParams);
  const bookIndex = (searchParams.page * searchParams.perPage) - searchParams.perPage;
  const search = `&q=${searchParams.search}`;
  const paging = `&startIndex=${bookIndex}&maxResults=${searchParams.perPage}`;

  //TODO: ${paging} logic
  console.log('*****GET******', `${VOLUMES_URL}${search}${paging}`);
  return get(`${VOLUMES_URL}${search}${paging}`);
}

export function getBook(volumeId) {
  console.log('*****getBook********', volumeId);
  return get(`${BOOK_URL}/${volumeId}`)
    .then(r => {
      console.log('*****URL*****', `${BOOK_URL}/${volumeId}`);
      r.books;
    });
}