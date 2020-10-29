import WeatherSiteSearches from '../../constants/constants';

const request = require('request');
const cheerio = require('cheerio');


export const createSearchUrl = (searchInput) => {
  return new Promise(function (resolve, reject) {

    //Remove spaces from url
    var url = `${WeatherSiteSearches.SEARCH_ENGINE}${searchInput}`;
    url = url.split(' ').join('');
    url = `${url}  israel`;

    request(url, (error, response,
      html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);

        url = $('head').find('link[rel=canonical]').attr('href');

        //Switch for more details page
        url = url.split('weather-forecast').join('current-weather');

        //Replace hebrew with english
        url = url.split('/he/').join('/en/');
        
        console.log('1');
        resolve(url);
      }
      else {
        reject(error);
      }
    });
  });
}


