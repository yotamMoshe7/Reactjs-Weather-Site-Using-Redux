import { SearchActionsTypes } from './search.types';

const INITIAL_STATE = {
  searchField: 'Default Search',
  name: '',
  temp: '',
  humidity: '',
  wind: '',
  icon: ''
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SearchActionsTypes.SEARCH_BUTTON_PRESSED:
      return {
        ...state,
        searchField: action.payload
      };
    
    case SearchActionsTypes.SET_WEATHER_DATA:
      return{
        ...state,
        name: action.payload.name,
        temp: action.payload.temp,
        humidity: action.payload.humidity,
        wind: action.payload.wind,
        icon: action.payload.icon
      };

    default:
      return state;
  }
};

export default searchReducer;