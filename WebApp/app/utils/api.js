import config from '../config.json';

const apiHost = (process.env.NODE_ENV !== 'production') ? `//${config.apiHost}` : '';

export function fetchBooks() {
  const relativeUri = '/api/books';
  return fetch(`${apiHost}${relativeUri}`);
}