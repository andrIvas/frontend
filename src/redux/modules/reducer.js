import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import search from './search';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  search
});
