const getWeatherData = async (city) => {
  cityName.innerHTML = city;
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b05bfc09a1msh1e3d4a779f78127p1ea898jsnc8e6d5f36097",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // let {cloud_pct, temp, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset  } = result ;
    // console.log("cloud_pct", cloud_pct)
    // console.log("temp", temp)
    {
      cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp2.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity_1.innerHTML = result.humidity;
      humidity_2.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed_1.innerHTML = result.wind_speed;
      wind_speed_2.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    }

    console.log("this is ressssult", result);
  } catch (error) {
    console.error(error);
  }
};

getWeatherData("Delhi");

const getWeather = async (city) => {
  console.log("city", city)
  cityName.innerHTML = city;
  const url =
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b05bfc09a1msh1e3d4a779f78127p1ea898jsnc8e6d5f36097",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // let {cloud_pct, temp, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset  } = result ;
    // console.log("cloud_pct", cloud_pct)
    // console.log("temp", temp)
    {
      cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed_1.innerHTML = result.wind_speed;
      wind_speed_2.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    }

    console.log("this is ressssult", result);
  } catch (error) {
    console.error(error);
  }
  console.log(result)
};


submit.addEventListener("click", (e) => {
  console.log("e",e);
  getWeather(city.value);
});
