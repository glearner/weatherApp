import axios from 'axios';
const API_KEY = '59b540bea0be7f3659cdb94aa4c50939';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH-WEATHER'

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request

    }
}