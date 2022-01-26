import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageProps } from 'react-native';
import { weatherIcons } from "../config/images"

export interface IInitialState {
    city: string,
    temperature: string,
    weatherIcon?: number,
    feelsLike: string,
    windSpeed: string,
    humidity: string
}

export interface IWeatherState {
    value: IInitialState
}

interface IActionPayload {
    city: string,
    data: any
}

const initialState: IWeatherState = {
    value: {
        city: "Select City",
        temperature: "",
        weatherIcon: undefined,
        feelsLike: "",
        windSpeed: "",
        humidity: ""
    }
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeatherInfo: (state, action: PayloadAction<IActionPayload>) => {
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
