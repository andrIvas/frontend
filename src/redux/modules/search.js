import { combineReducers } from 'redux';
import createReducer from '../../utils/createReducer';

export const types = {
  SEARCH: {
    REQUEST: 'SEARCH_REQUEST',
    SUCCESS: 'SEARCH_SUCCESS',
    FAILURE: 'SEARCH_FAILURE'
  }
};

const initialState = {
  list: {
    tw: 'asfd'
  }
};


function CART_CHECKOUT_REQUEST(state, action) {
  return state;
}

function CART_CHECKOUT_ERROR(state, action) {
  return state;
}

const handlers = {
  [types.SEARCH.REQUEST]: CART_CHECKOUT_REQUEST,
  [types.SEARCH.ERROR]: CART_CHECKOUT_ERROR,
};

export default combineReducers({
  value: createReducer(initialState, handlers)
});

