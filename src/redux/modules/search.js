import { combineReducers } from 'redux';
import createReducer from '../../utils/createReducer';

export const types = {
  SEARCH: {
    REQUEST: 'SEARCH_REQUEST',
    SUCCESS: 'SEARCH_SUCCESS',
    FAILURE: 'SEARCH_FAILURE'
  },
  LOCATIONS: {
    REQUEST: 'LOCATIONS_REQUEST',
    SUCCESS: 'LOCATIONS_SUCCESS',
    FAILURE: 'LOCATIONS_FAILURE'
  }
};

const initialSearch = {};
const initialFilters = {
  locations: [
    { id: 1, name: 'Москва' },
    { id: 2, name: 'Питер' },
    { id: 3, name: 'Орел' },
    { id: 4, name: 'Омск' },
    { id: 5, name: 'Воронеж' }
  ],
  price: {
    min: 0,
    max: Infinity
  },
  apartmentType: [
    { id: 1, name: '1-комнатная квартира' },
    { id: 3, name: '2-комнатная квартира' },
    { id: 2, name: '3-комнатная квартира' },
    { id: 4, name: 'Студия' },
  ]
};


function searchRequest(state, action) {
  return state;
}
function searchSuccess(state, action) {
  return state;
}
function searchFailure(state, action) {
  return state;
}

function locationsRequest(state, action) {
  return state;
}
function locationsSuccess(state, action) {
  return state;
}
function locationsFailure(state, action) {
  return state;
}

export default combineReducers({
  filters: createReducer(initialFilters, {
    [types.LOCATIONS.REQUEST]: locationsRequest,
    [types.LOCATIONS.SUCCESS]: locationsSuccess,
    [types.LOCATIONS.FAILURE]: locationsFailure,
  }),
  search: createReducer(initialSearch, {
    [types.SEARCH.REQUEST]: searchRequest,
    [types.SEARCH.SUCCESS]: searchSuccess,
    [types.SEARCH.FAILURE]: searchFailure,
  })
});

