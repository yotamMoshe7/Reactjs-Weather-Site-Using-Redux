import { SearchActionsTypes } from './search.types';

export const setSearchField = searchField => ({
  type: SearchActionsTypes.SEARCH_BUTTON_PRESSED,
  payload: searchField,
});

export const setWeatherData = weatherData => ({
  type: SearchActionsTypes.SET_WEATHER_DATA,
  payload: {
    name: weatherData.name,
    temp: weatherData.temp,
    humidity: weatherData.humidity,
    wind: weatherData.wind,
    icon: weatherData.icon
  }
});