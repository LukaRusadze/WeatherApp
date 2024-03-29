import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IInitialState } from '../features/weatherSlice'

interface IProps {
    weatherInfo: IInitialState
}

const WeatherDetails = ({ weatherInfo }: IProps) => {
    return (
        <View style={styles.bottomBar}>
            <Text style={styles.smallInfo}>{weatherInfo.feelsLike}</Text>
            <Text style={styles.smallInfo}>{weatherInfo.windSpeed}</Text>
            <Text style={styles.smallInfo}>{weatherInfo.humidity}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    bottomBar: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    smallInfo: {
        color: "white",
        fontSize: 20
    }
})

export default WeatherDetails;
