// import { connect } from 'react-redux';
// import { setWeatherData } from '../../redux/search/search.actions';

const request = require('request');
const cheerio = require('cheerio');

export const getWeatherData = (url) => {
  return new Promise(function (resolve, reject) {

    var nameCrawl, tempCrawl, windCrawl, humidityCrawl, iconCrawl = '';

    request(url, (error, response,
      html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        //Pull city name
        nameCrawl = $('.header-inner')
          .find('h1')
          .text();

        //Pull temp
        tempCrawl = $('.temp')
          .text()
          .replace(/\s\s+/g, '')
          .split('C')[0];

        //Pull wind
        windCrawl = $('.left')
          .text()
          .replace(/\s\s+/g, '')
          .split('Wind Gusts')[1]
          .split('km')[0];

        //Pull humidity
        humidityCrawl = $('.left')
          .text()
          .replace(/\s\s+/g, '')
          .split('Humidity')[1]
          .split('%')[0];

        //Pull icon
        iconCrawl = $('.icon')
          .attr('src');


        // setWeatherData({
        //   name: nameCrawl,
        //   temp: tempCrawl,
        //   humidity: humidityCrawl,
        //   wind: windCrawl,
        //   icon: iconCrawl
        // })

        resolve({
          name: nameCrawl,
          temp: tempCrawl,
          humidity: humidityCrawl,
          wind: windCrawl,
          icon: iconCrawl
        });
      }
      else {
        reject(error);
      }

    });
  });
}

// const mapDispatchToProps = dispatch => ({
//   setWeatherData: data => dispatch(setWeatherData(data))
// });

// export default connect(null, mapDispatchToProps)(getWeatherData);

