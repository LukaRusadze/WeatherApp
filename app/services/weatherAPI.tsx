import { cities } from "../config/cityCoords"
import axios from 'axios'

export const getWeatherData = (city: string) => {
    const APIKey: string = "5986519938818cdd303826b71e5757dd"
    const baseURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[city].lat}&lon=${cities[city].lon}&exclude=minutely,hourly,alerts&units=metric&appid=${APIKey}`

    return axios.get(baseURL)
}