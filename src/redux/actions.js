import { types as searchTypes } from './modules/search';

export function fetchLocations() {
  return {
    types: [searchTypes.LOCATIONS.REQUEST, searchTypes.LOCATIONS.SUCCESS, searchTypes.LOCATIONS.FAILURE],
    promise: (client) =>
      client
        .get('/api/v1.0/location', {})
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve([
              { id: 1, name: 'Москва' },
              { id: 2, name: 'Питер' },
              { id: 3, name: 'Орел' },
              { id: 4, name: 'Омск' },
              { id: 5, name: 'Воронеж' }
            ]), 50);
          });
        })
  };
}


export function fetchSearch(data) {
  return {
    types: [searchTypes.SEARCH.REQUEST, searchTypes.SEARCH.SUCCESS, searchTypes.SEARCH.FAILURE],
    promise: (client) => client.post('/api/v1.0/search', { data })
  };
}
