import React, { useEffect, useLayoutEffect } from 'react';
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    FlatList,
    View,
} from "react-native";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import WeatherDaily from '../components/WeatherDaily';
import { useHeaderHeight } from '@react-navigation/elements';

const addUUIDToItems = (json) => {
    for (const item of json) {
        item.key = uuidv4();
    }
    return json;
}

const SevenDayWeatherScreen = ({ navigation, ...props }) => {
    let weatherJSON = addUUIDToItems([...props.route.params.response.daily]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: props.route.params.title,
        })
    }, [])

    const headerHeight = useHeaderHeight();

    return (
        <ImageBackground
            style={{ paddingTop: headerHeight, ...styles.background }}
            source={require("../assets/weatherBackgrounds/Sunny.jpg")}
        >
            <SafeAreaView>
                <FlatList
                    data={weatherJSON}
                    contentContainerStyle={styles.list}
                    renderItem={({ item, index, separators }) => <WeatherDaily item={item} />}
                />
            </SafeAreaView>

        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    list: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        flexGrow: 1,
        justifyContent: "space-between"
    },

    background: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
    },
})
export default SevenDayWeatherScreen;