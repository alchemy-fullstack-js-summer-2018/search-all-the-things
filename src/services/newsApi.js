// const API_KEY = '9ff12e67d0cd5b5a51730b280660b0fc';
// const API_QUERY = `method=album.search&album=moon&apiKey=${API_KEY}&format=json`;
// const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';
// const EVERYTHING_URL = `${BASE_URL}/?${API_QUERY}`;

// const throwJson = json => { throw json; };

// const get = url => {
//   const json = window.localStorage.getItem(url);
//   if(json) {
//     const response = JSON.parse(json);
//     return Promise.resolve(response);
//   }

//   return fetch(url)
//     .then(r => r.ok ? r.json() : r.json().then(throwJson))
//     .then(response => {
//       window.localStorage.setItem(url, JSON.stringify(response));
//       return response;
//     });

// };

// export function getAlbums(search) {
//   const query = `&album=${search}`;
//   // const paging = `&page=${page}&pageSize=${pageSize}`;

//   return get(`${EVERYTHING_URL}`);
// }

