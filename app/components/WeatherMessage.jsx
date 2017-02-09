const React = require('react');

const WeatherMessage = ({temp, location}) => {
  return (
    <h3>it is {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
