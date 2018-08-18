const API_KEY = '9ff12e67d0cd5b5a51730b280660b0fc';
const API_QUERY = `method=album.search&album=moon&apiKey=${API_KEY}&format=json`;
const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';
cosnt EVERYTHING_URL = `${BASE_URL}/?${API_QUERY}`;