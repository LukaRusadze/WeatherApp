import React, { useEffect, useLayoutEffect } from 'react';
import {
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from "react-native";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import WeatherDaily from '../components/WeatherDaily';
import { useHeaderHeight } from '@react-navigation/elements';
import { RootStackParamList } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface IProps {
    navigation: StackNavigationProp<RootStackParamList, 'SevenDayWeatherScreen'>
    route: RouteProp<RootStackParamList, 'SevenDayWeatherScreen'>
}

const addUUIDToItems = (items: Array<any>) => {
    for (const item of items) {
        item.key = uuidv4();
    }
    return items;
}

const SevenDayWeatherScreen = ({ navigation, route, ...props }: IProps) => {
    const { response, title } = route.params;
    let weatherJSON = addUUIDToItems([...response.daily]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title,
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