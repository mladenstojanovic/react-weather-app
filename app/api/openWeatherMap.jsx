const axios = require('axios');

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&units=metric&appid=4162a880e81a3c91ed3dcc0cfaf698b2`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error(err.response.data.message);
    });
  }
}
