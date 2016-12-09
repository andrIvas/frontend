import { types as searchTypes } from './modules/search';

export function fetchLocations() {
  return {
    types: [searchTypes.LOCATIONS.REQUEST, searchTypes.LOCATIONS.SUCCESS, searchTypes.LOCATIONS.FAILURE],
    promise: (client) => fetch('/api/v1.0/location') //client.get('/api/v1.0/location', {})
  };
}


export function fetchSearch() {
  return {
    types: [searchTypes.SEARCH.REQUEST, searchTypes.SEARCH.SUCCESS, searchTypes.SEARCH.FAILURE],
    promise: (client) => fetch('/api/v1.0/search')//client.get('/api/v1.0/search', {})
  };
}
