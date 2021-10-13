import React, { useState } from "react";
import {
    ImageBackground,
    View,
    StyleSheet,
    StatusBar,
    Text,
    Image,
} from "react-native";
import CityButton from "../components/CityButton";

const WeatherScreen = (props) => {
    const [city, setCity] = useState("Select City");
    const [temperature, setTemperature] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");

    const getCityTime = (cityTimezone) => {
        const date = new Date();

        var cityTime =
            date.getTime() + date.getTimezoneOffset() * 60000 + 1000 * cityTimezone;

        return new Date(cityTime);
    };

    const handleCityChange = (city) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5986519938818cdd303826b71e5757dd`
        )
            .then((response) => response.json())
            .then((data) => {
                setCity(data.name);
                setTemperature(Math.floor(data.main.temp) + "°C");
                console.log(data);

                switch (data.weather[0].main) {
                    case "Clear":
                        {
                            const cityTime = getCityTime(data.timezone);
                            if (cityTime.getHours() > 6) {
                                setWeatherIcon(require("../assets/weatherIcons/Sunny.png"));
                            } else if (cityTime.getHours() > 18 || cityTime.getHours() >= 0) {
                                setWeatherIcon(
                                    require("../assets/weatherIcons/QuietNight.png")
                                );
                            }
                        }
                        break;
                    case "Clouds":
                        setWeatherIcon(require("../assets/weatherIcons/Cloudy.png"));
                        break;
                    case "Fog":
                        setWeatherIcon(require("../assets/weatherIcons/Foggy.png"));
                        break;
                    case "Snow":
                        setWeatherIcon(require("../assets/weatherIcons/Snowing.png"));
                        break;
                    case "Rain":
                        setWeatherIcon(require("../assets/weatherIcons/HeavyRain.png"));
                        break;
                    case "Drizzle":
                        setWeatherIcon(require("../assets/weatherIcons/LightRain.png"));
                        break;
                    case "Thunderstorm":
                        setWeatherIcon(require("../assets/weatherIcons/Thunder.png"));
                        break;
                    default:
                        setWeatherIcon(require("../assets/weatherIcons/Sunny.png"));
                }
            });
    };

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/weatherBackgrounds/Sunny.jpg")}
        >
            <View style={styles.citySelection}>
                <CityButton
                    text="Tbilisi"
                    onPress={() => handleCityChange("Tbilisi")}
                />

                <CityButton
                    text="Kutaisi"
                    onPress={() => handleCityChange("Kutaisi")}
                />

                <CityButton
                    text="Batumi"
                    onPress={() => handleCityChange("Batumi")}
                />
            </View>

            <View style={styles.weatherDisplay}>
                <Text style={styles.cityText}>{city}</Text>
                <Text style={styles.temperatureText}>{temperature}</Text>
                <Image style={styles.weatherIcon} source={weatherIcon} />
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
    },

    weatherIcon: {
        marginTop: 50,
        resizeMode: "contain",
        height: 100,
    },
});

export default WeatherScreen;
