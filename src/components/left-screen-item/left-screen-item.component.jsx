import React from 'react';
import { Component } from 'react';
import './left-screen-item.styles.scss';
import { connect } from 'react-redux';

class LeftScreenItem extends Component {

  render() {
    return (
      <div className='left-screen-item'>
        <div className='city-name'>{this.props.name}</div>
        <div className='icon'>
          <img
            className='img' src={`https://www.accuweather.com/${this.props.icon}`} alt='weather-icon'>
          </img>
        </div>
        <div className='temp'>{this.props.temp}</div>
        <div className='wind-speed'>Wind Speed: {this.props.wind} mph</div>
        <div className='humidity'>Humidity: {this.props.humidity}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ search: { searchField, name, temp, humidity, icon, wind } }) => ({
  searchField, name, temp, humidity, icon, wind
});

export default connect(mapStateToProps)(LeftScreenItem);