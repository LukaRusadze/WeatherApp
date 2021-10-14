import React from 'react';
import {
    ImageBackground,
    ScrollView,
    View,
    StyleSheet,
    StatusBar,
    Text,
    Image,
    Dimensions,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { weatherIcons } from "../config/images"



const formatDate = (unix_timestamp) => {
    return new Date(unix_timestamp * 1000);
}

const SevenDayWeatherScreen = (props) => {
    var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weatherJSON = [...props.route.params.response.daily];

    let output = []
    weatherJSON.forEach(element => {
        output.push(
            <View style={styles.weatherDay}>
                <View style={styles.left}>
                    <Image style={styles.weatherIcon} source={weatherIcons[element.weather[0].main]} />
                    <View style={styles.date}>
                        <Text style={styles.dateText}>{formatDate(element.dt).toISOString().split('T')[0]}</Text>
                        <Text style={styles.dateText}>{arrayOfWeekdays[formatDate(element.dt).getDay()]}</Text>
                    </View>
                </View>

                <View style={styles.right}>
                    <Text style={styles.tempText}>High: {Math.floor(element.temp.max) + "°C"}</Text>
                    <Text style={styles.tempText}>Low: {Math.floor(element.temp.min) + "°C"}</Text>
                </View>
            </View>
        )
    })
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/weatherBackgrounds/Sunny.jpg")}
        >
            <View style={styles.container}>
                {output}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-evenly',
        height: "100%"
    },

    background: {
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        overflow: "scroll"
    },

    weatherIcon: {
        resizeMode: "center",
        height: 50,
        width: 50
    },

    weatherDay: {
        width: Dimensions.get('window').width - 20,
        height: 80,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        borderRadius: 35,
        backgroundColor: "rgba(237, 237, 237, 0.8)",
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
    }
})
export default SevenDayWeatherScreen;