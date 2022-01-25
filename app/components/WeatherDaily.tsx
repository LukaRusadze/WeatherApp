import React from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';

import { weatherIcons } from "../config/images"

const formatDate = (unix_timestamp: string): Date => {
    return new Date(Number(unix_timestamp) * 1000);
}

const WeatherDaily = ({ item }: any) => {
    var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <View style={styles.weatherDay} >
            <View style={styles.left}>
                <Image style={styles.weatherIcon} source={weatherIcons[item.weather[0].main]} />
                <View>
                    <Text style={styles.dateText}>{formatDate(item.dt).toISOString().split('T')[0]}</Text>
                    <Text style={styles.dateText}>{arrayOfWeekdays[formatDate(item.dt).getDay()]}</Text>
                </View>
            </View>

            <View style={styles.right}>
                <Text style={styles.tempText}>High: {Math.floor(item.temp.max) + "°C"}</Text>
                <Text style={styles.tempText}>Low: {Math.floor(item.temp.min) + "°C"}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    weatherDay: {
        width: Dimensions.get('window').width - 20,
        height: 80,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        borderRadius: 35,
        backgroundColor: "rgba(237, 237, 237, 0.8)",
        marginBottom: 10

    },

    left: {
        paddingLeft: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },

    right: {
        paddingRight: 25
    },

    dateText: {
        marginLeft: 10,
        color: "black"
    },

    tempText: {
        color: "black",
        textAlign: "right"
    },

    weatherIcon: {
        resizeMode: "center",
        height: 50,
        width: 50
    },
})

export default WeatherDaily;
