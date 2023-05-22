const getWeatherData = async () => {
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
        cloud_pct = response.cloud_pct;
        temp = response.temp;
        feels_like = response.feels_like;
        humidity = response.humidity;
        min_temp = response.min_temp;
        max_temp = response.max_temp;
        wind_speed = response.wind_speed;
        wind_degrees = response.wind_degrees;
        sunrise = response.sunrise;
        sunset = response.sunset;
      }
    
    console.log("this is ressssult",result);
  } catch (error) {
    console.error(error);
  }
};

getWeatherData();
