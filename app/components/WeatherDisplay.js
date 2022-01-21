import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const WeatherDisplay = ({ weatherInfo }) => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.cityText}>{weatherInfo.city}</Text>
            <Text style={styles.temperatureText}>{weatherInfo.temperature}</Text>
            {weatherInfo.weatherIcon === "" ? <></> : <Image style={styles.weatherIcon} source={weatherInfo.weatherIcon} />}
        </View>
    );
};

const styles = StyleSheet.create({
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

})

export default WeatherDisplay;
