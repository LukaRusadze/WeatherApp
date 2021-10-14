import React, { useState, useCallback } from "react";
import {
    ImageBackground,
    View,
    StyleSheet,
    StatusBar,
    Text,
    Image,
} from "react-native";
import CustomBtn from "../components/CustomButton";
import { weatherIcons } from "../config/images"
import { cities } from "../config/cityCoords"

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

    const handleCityChange = useCallback((city) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${cities[city].lat}&lon=${cities[city].lon}&exclude=minutely,hourly,alerts&units=metric&appid=5986519938818cdd303826b71e5757dd`
        )
            .then((response) => response.json())
            .then((data) => {
                setWeatherInfo({
                    city: city,
                    temperature: Math.floor(data.current.temp) + "°C",
                    weatherIcon: weatherIcons[data.current.weather[0].main],
                    feelsLike: "Feels like: " + Math.floor(data.current.feels_like) + "°C",
                    windSpeed: "Wind Speed: " + Math.floor(data.current.wind_speed) + " km/h",
                    humidity: "Humidity: " + data.current.humidity + "%"
                });
                setResponse(data)
            });
    }, []);

    let output = []
    if (weatherInfo.city != "Select City") {
        output.push(<CustomBtn text="View More" onPress={() => navigation.navigate('SevenDayWeatherScreen', { response })} />)
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/weatherBackgrounds/Sunny.jpg")}
        >
            <View style={styles.citySelection}>
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
            </View>

            <View style={styles.weatherDisplay}>
                <View style={styles.topBar}>
                    <Text style={styles.cityText}>{weatherInfo.city}</Text>
                    <Text style={styles.temperatureText}>{weatherInfo.temperature}</Text>
                    <Image style={styles.weatherIcon} source={weatherInfo.weatherIcon} />
                </View>

                <View>
                    {output}
                </View>

                <View style={styles.bottomBar}>
                    <Text style={styles.smallInfo}>{weatherInfo.feelsLike}</Text>
                    <Text style={styles.smallInfo}>{weatherInfo.windSpeed}</Text>
                    <Text style={styles.smallInfo}>{weatherInfo.humidity}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
    },

    citySelection: {
        width: 300,
        justifyContent: "space-between",
        marginTop: StatusBar.currentHeight + 20,
        flexDirection: "row",
    },

    cityText: {
        color: "white",
        fontSize: 35,
        marginTop: 30,
    },

    temperatureText: {
        color: "white",
        fontSize: 20,
        marginTop: 10,
    },

    weatherDisplay: {
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "space-between"
    },

    weatherIcon: {
        marginTop: 50,
        resizeMode: "contain",
        height: 100,
        width: 300,
    },

    topBar: {
        flexDirection: "column",
        alignItems: "center",
    },

    bottomBar: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 200,
    },

    smallInfo: {
        color: "white",
        fontSize: 20
    }
});

export default WeatherScreen;
