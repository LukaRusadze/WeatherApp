import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "./app/screens/WeatherScreen";
import { Platform, StatusBar } from "react-native";
import SevenDayWeatherScreen from "./app/screens/SevenDayWeatherScreen";
import { Provider } from "react-redux";
import store from "./app/store";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App Executed");
  StatusBar.setBarStyle("light-content", true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: "white"
          }
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
            options={{ headerShown: Platform.OS == "ios" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
