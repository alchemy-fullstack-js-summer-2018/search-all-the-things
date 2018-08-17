const BASE_URL = 'https://api.iextrading.com/1.0';
const COLLECTIONS_URL = `${BASE_URL}/stock/market/collection`;
const SECTOR_URL = `${COLLECTIONS_URL}/sector?collectionName=`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function getSector(sector) {
  return get(SECTOR_URL + sector).then(res => res);
}
