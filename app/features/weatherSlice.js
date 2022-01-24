import { createSlice } from '@reduxjs/toolkit';
import { weatherIcons } from "../config/images"

const initialState = {
    value: {
        city: "Select City",
        temperature: "",
        weatherIcon: "",
        feelsLike: "",
        windSpeed: "",
        humidity: ""
    }
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeatherInfo: (state, action) => {
            const { city, data } = action.payload

            state.value = {
                city: city,
                temperature: Math.floor(data.current.temp) + "°C",
                weatherIcon: weatherIcons[data.current.weather[0].main],
                feelsLike: "Feels like: " + Math.floor(data.current.feels_like) + "°C",
                windSpeed: "Wind Speed: " + Math.floor(data.current.wind_speed) + " km/h",
                humidity: "Humidity: " + data.current.humidity + "%"
            }
        }
    },
});

export const { setWeatherInfo } = weatherSlice.actions;

export default weatherSlice.reducer;
