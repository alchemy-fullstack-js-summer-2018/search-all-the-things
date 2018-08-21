//export
//eslint-disable-next-line
const API_KEY = '94871e3858f326d228123973aa139af9a44b9fe9bc6f8890d';
const BASE_URL = 'http://api.wordnik.com/v4/word.json/';
const throwJson = json => { throw json; };

const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search(search) {
  return get(`${BASE_URL}${search}/definitions?&api_key=${API_KEY}`);
}