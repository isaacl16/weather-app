import axios from 'axios';


const base_url = "http://api.openweathermap.org/data/2.5"
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY

const instance = axios.create({
    baseURL: base_url,
})


export const fetchWeather = async (queryString) =>
    instance({
        method: 'GET',
        url: `/weather`,
        params: {
            q: queryString,
            appid: apiKey
        }
    })