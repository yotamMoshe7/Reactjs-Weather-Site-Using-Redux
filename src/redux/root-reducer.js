import { combineReducers } from 'redux';

import searchReducer from './search/search.reducer';
import placesReducer from './default-places/default-places.reducer';

export default combineReducers ({
  search: searchReducer,
  defaultPlaces: placesReducer
});