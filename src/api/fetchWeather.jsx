import React from 'react'
import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = '32c605ef8e217a5111011970f7da4b16' 

 export const fetchWeather = async (query) => {
  
  const { data } = await axios.get(URL, {
    params : {
      q : query,
      units: 'metric',
      APPID: API_KEY,
    }
  });

  return data;

}


