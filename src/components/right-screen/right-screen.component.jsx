import React from 'react';
import './right-screen.styles.scss';
import RightScreenItem from '../right-screen-item/right-screen-item';
import WeatherSiteSearches from '../../constants/constants';

const RightScreen = (props) => (
  <div className='right-screen'>
    <RightScreenItem index={0}  url={ WeatherSiteSearches.DEFAULT_SEARCH_1 } />
    <RightScreenItem index={1}  url={ WeatherSiteSearches.DEFAULT_SEARCH_2 } />
  </div>
);

export default RightScreen;