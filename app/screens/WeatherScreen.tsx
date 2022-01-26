import React, { useState } from "react";
import {
    ImageBackground,
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from "react-native";
import CustomBtn from "../components/CustomButton";
import WeatherDetails from "../components/WeatherDetails";
import WeatherDisplay from '../components/WeatherDisplay'
import { getWeatherData } from "../services/weatherAPI";
import { setWeatherInfo } from "../features/weatherSlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../App'
import { useAppDispatch, useAppSelector } from "../config/hooks";

interface IProps {
    navigation: StackNavigationProp<RootStackParamList, 'Weather'>;
}

const WeatherScreen = ({ navigation }: IProps) => {

    const dispatch = useAppDispatch()
    const [response, setResponse] = useState({})
    const weatherInfo = useAppSelector((state) => state.weather.value)

    const handleCityChange = async (city: string) => {
        const { data } = await getWeatherData(city)

        dispatch(setWeatherInfo({ city, data }))

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
                        onPress={() => navigation.navigate('SevenDayWeatherScreen', { response, title: weatherInfo.city })} /> :
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
        marginTop: StatusBar.currentHeight! + 20,
        flexDirection: "row",
    },

    weatherContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
});

export default WeatherScreen;
