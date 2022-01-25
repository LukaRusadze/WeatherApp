import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import WeatherScreen from "./app/screens/WeatherScreen";
import SevenDayWeatherScreen from "./app/screens/SevenDayWeatherScreen";
import { store } from "./app/store";

export type RootStackParamList = {
  Welcome: undefined,
  Weather: undefined,
  SevenDayWeatherScreen: {
    response: any,
    title: string,
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  console.log("App Executed");
  StatusBar.setBarStyle("light-content", true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerLeft: () => Platform.OS === "ios" ? null : true,
          headerTitleStyle: {
            color: "white",
          },
        }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Weather"
            component={WeatherScreen}
          />
          <Stack.Screen
            name="SevenDayWeatherScreen"
            component={SevenDayWeatherScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
