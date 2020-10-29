import React, { Component } from 'react';
import './left-screen.styles.scss';
import { createSearchUrl } from '../crawler/create-search-url';
import { getWeatherData } from '../crawler/crawler.component';
import LeftScreenItem from '../left-screen-item/left-screen-item.component';
import WeatherSiteSearches from '../../constants/constants';
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/search/search.actions';
import { setWeatherData } from '../../redux/search/search.actions';

const cerateUrlAndGetWeatherData = async (searchInput, setWeatherData) => {
  var urlPromise = await createSearchUrl(searchInput);
  var weatherDataPromise = await getWeatherData(urlPromise);
  setWeatherData(weatherDataPromise);
}

const getDataAndSetInState =
  async (searchInput, setWeatherData) => {
    console.log("1");
    var weatherDataPromise = await getWeatherData(searchInput);
    setWeatherData(weatherDataPromise);
  }

class LeftScreen extends Component {

  componentDidMount() {
    //Initial state when page upload
    getDataAndSetInState(WeatherSiteSearches.DEFAULT_SEARCH_3,
      this.props.setWeatherData);
  
    // this.interval = setInterval(() => getDataAndSetInState(this.props.url, this.props.setDefaultPlaceWeatherData), 10000);
  }

  searchButtonClick = () => {
    //Get user input
    var searchUserInput = document.getElementById("input-field").value;

    this.props.setSearchField(searchUserInput);

    //Create url and update data
    cerateUrlAndGetWeatherData(searchUserInput, this.props.setWeatherData)
  }

  render() {
    return (
      <div className='left-screen'>
        <div className='search'>
          <input id='input-field' className='input' type="text" placeholder=' Search location...' />
          <button onClick={this.searchButtonClick}
            className='btn' type="submit"><i id='icon' className="fa fa-search" ></i></button>
        </div>

        <LeftScreenItem />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  searchField: state.search.searchField
});

const mapDispatchToProps = dispatch => ({
  setSearchField: searchInput => dispatch(setSearchField(searchInput)),
  setWeatherData: data => dispatch(setWeatherData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftScreen);