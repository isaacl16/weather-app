import axios from 'axios';
import { lookup } from 'country-data';

const OPENWEATHER_BASE_URL = process.env.REACT_APP_OPENWEATHER_BASE_URL
console.log(OPENWEATHER_BASE_URL)
const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

export const getGeographicCoordinates = (city, country) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
        params: {
            q: city,
            limit: 3,
            appid: OPENWEATHER_API_KEY
        }
    }).then((res) => {
        const data = res.data;
        console.log(data)
        const words = country.split(' ')
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        const countryUpperCase = words.join(' ')
        return data.map((location) => {
            return {
                city: location.name,
                country: lookup.countries({ name: countryUpperCase })[0],
                lat: location.lat,
                lon: location.lon,
            }
        })
    }).catch((e) => {
        // Toast here
        console.error(e.message);
    })
}

export const getWeather = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            lat: lat,
            lon: lon,
            appid: OPENWEATHER_API_KEY
        }
    }).then((res) => {
        const data = res.data;
        console.log(data)
        return {
            currentWeather: data.weather[0].main,
            description: data.weather[0].description,
            temperature: data.main.temp_min + "℃ ~ " + data.main.temp_max + `℃`,
            humidity: data.main.humidity + "%",
            timeZone: data.timezone
        }
    }).catch((e) => {
        // Toast here
        console.error(e.message);
    })
}