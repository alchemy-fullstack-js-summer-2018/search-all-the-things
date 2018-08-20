//export
// NOTES TO REF/REVISE LATER:

//eslint-disable-next-line
const API_KEY = '94871e3858f326d228123973aa139af9a44b9fe9bc6f8890d';
const API_QUERY = `apiKey=${API_KEY}`;
const BASE_URL = 'http://api.wordnik.com/v4/word.json/';

//const apiKey = process.env.API_KEY;
// 'http://api.wordnik.com/v4/word.json/{word}/definitions?&api_key='
// 'http://api.wordnik.com/v4/word.json/ugly/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=94871e3858f326d228123973aa139af9a44b9fe9bc6f8890d'
//'http://api.wordnik.com/v4/word.json/ugly/definitions?&api_key=94871e3858f326d228123973aa139af9a44b9fe9bc6f8890d';
//`http://api.wordnik.com/v4/word.json/${search}/definitions?&api_key=${API_KEY}`;
//`http://api.wordnik.com/v4/word.json/${ugly}/definitions?&api_key=${API_KEY}`;

const throwJson = json => { throw json; };

const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search(search) {
  return get(`${BASE_URL}${search}/definitions?&api_key=${API_KEY}`);
}