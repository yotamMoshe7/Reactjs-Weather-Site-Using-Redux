import { DefaultPlacesTypes } from './default-places.types';

export const setDefaultPlaceWeatherData = place => ({
  type: DefaultPlacesTypes.SET_DEFAULT_PLACES_WEATHER_DATA,
  payload: place
});