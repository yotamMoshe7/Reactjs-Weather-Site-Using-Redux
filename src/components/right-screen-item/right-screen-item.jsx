import React from 'react';
import './right-screen-item.styles.scss';
import { getWeatherData } from '../crawler/crawler.component';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setDefaultPlaceWeatherData } from '../../redux/default-places/default-places.actions';


const getDataAndSetInState =
  async (searchInput, setDefaultPlaceWeatherData) => {
    console.log("1");
    var weatherDataPromise = await getWeatherData(searchInput);
    setDefaultPlaceWeatherData(weatherDataPromise);
  }

class RightScreenItem extends Component {

  componentDidMount() {
    getDataAndSetInState(this.props.url, this.props.setDefaultPlaceWeatherData);

    // this.interval = setInterval(() => getDataAndSetInState(this.props.url, this.props.setDefaultPlaceWeatherData), 10000);
  }

  render() {

    const places = this.props.places;
    const index = this.props.index;

    return (
      <div className='right-screen-item'>
        <div className='city-name'>{places[index] !== undefined ? places[index].name : ''}</div>
        <div className='icon'>
          <img
            className='img' src={`https://www.accuweather.com/${places[index] !== undefined ? places[index].icon : ''}`} alt='weather-icon'>
          </img>
        </div>
        <div className='temp'>{places[index] !== undefined ? places[index].temp : ''}</div>
        <div className='wind-speed'>Wind Speed:{places[index] !== undefined ? places[index].windSpeed : ''} mph</div>
        <div className='humidity'>Humidity:{places[index] !== undefined ? places[index].humidity : ''}%</div>
      </div>
    )
  }
}

const mapStateToProps = ({ defaultPlaces: { places } }) => ({
  places
});

const mapDispatchToProps = dispatch => ({
  setDefaultPlaceWeatherData: place => dispatch(setDefaultPlaceWeatherData(place))
});

export default connect(mapStateToProps, mapDispatchToProps)(RightScreenItem);