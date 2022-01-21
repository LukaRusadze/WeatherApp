import React, { useState, useCallback } from "react";
import {
    ImageBackground,
    View,
    StyleSheet,
    StatusBar,
    Text,
    SafeAreaView
} from "react-native";
import CustomBtn from "../components/CustomButton";
import WeatherDetails from "../components/WeatherDetails";
import WeatherDisplay from '../components/WeatherDisplay'
import { weatherIcons } from "../config/images"
import { getWeatherData } from "../services/weatherAPI";

const WeatherScreen = ({ navigation }) => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Select City",
        temperature: "",
        weatherIcon: "",
        feelsLike: "",
        windSpeed: "",
        humidity: ""
    })

    const [response, setResponse] = useState({})

    const handleCityChange = async (city) => {
        const { data } = await getWeatherData(city)

        setWeatherInfo({
            city: city,
            temperature: Math.floor(data.current.temp) + "°C",
            weatherIcon: weatherIcons[data.current.weather[0].main],
            feelsLike: "Feels like: " + Math.floor(data.current.feels_like) + "°C",
            windSpeed: "Wind Speed: " + Math.floor(data.current.wind_speed) + " km/h",
            humidity: "Humidity: " + data.current.humidity + "%"
        });

        setResponse(data)
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/weatherBackgrounds/Sunny.jpg")}
        >
            <SafeAreaView style={styles.citySelection}>
                <CustomBtn
                    text="Tbilisi"
                    onPress={() => handleCityChange("Tbilisi")}
                />

                <CustomBtn
                    text="Kutaisi"
                    onPress={() => handleCityChange("Kutaisi")}
                />

                <CustomBtn
                    text="Batumi"
                    onPress={() => handleCityChange("Batumi")}
                />
            </SafeAreaView>

            <View style={styles.weatherContainer}>

                <WeatherDisplay weatherInfo={weatherInfo} />

                {weatherInfo.city != "Select City" ?
                    <CustomBtn
                        text="View More"
                        onPress={() => navigation.navigate('SevenDayWeatherScreen', { response })} /> :
                    <></>}

                <WeatherDetails weatherInfo={weatherInfo} />

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        flex: 1,
    },

    citySelection: {
        width: 300,
        justifyContent: "space-between",
        marginTop: StatusBar.currentHeight + 20,
        flexDirection: "row",
    },

    weatherContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
});

export default WeatherScreen;
