import { types } from '../modules/search';

export function searchParam() {
  return {
    type: types.SEARCH.REQUEST
  };
}

