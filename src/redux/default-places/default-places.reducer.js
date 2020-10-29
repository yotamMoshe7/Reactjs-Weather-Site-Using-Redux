import { DefaultPlacesTypes } from './default-places.types';
import { addPlace } from './default-places.utils';

const INITIAL_STATE = {
  places: []
};

const placesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case DefaultPlacesTypes.SET_DEFAULT_PLACES_WEATHER_DATA:
      return{
        places: addPlace(state.places, action.payload)
      };

      default:
        return state;
  }
}

export default placesReducer;