const API_KEY = '9e217382d31d48af8c3bc200cdc6ddbd';
const API_QUERY = `apiKey=${API_KEY}`;
const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';
const EVERYTHING_URL = `${BASE_URL}/everything?${API_QUERY}`;
const SOURCES_URL = `${BASE_URL}/sources?${API_QUERY}`;
const SORT_QUERY = 'sortBy=publishedAt';

