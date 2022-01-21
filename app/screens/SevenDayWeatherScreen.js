import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    FlatList
} from "react-native";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import WeatherDaily from '../components/WeatherDaily';

const addUUIDToItems = (json) => {
    for (const item of json) {
        item.key = uuidv4();
    }
    return json;
}

const SevenDayWeatherScreen = ({ navigation, ...props }) => {
    let weatherJSON = addUUIDToItems([...props.route.params.response.daily]);

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/weatherBackgrounds/Sunny.jpg")}
        >
            <SafeAreaView>
                <FlatList
                    data={weatherJSON}
                    contentContainerStyle={styles.container}
                    renderItem={({ item, index, separators }) => <WeatherDaily item={item} />}
                />
            </SafeAreaView>

        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        flexGrow: 1,
        justifyContent: "space-between"
    },

    background: {
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
    },
})
export default SevenDayWeatherScreen;