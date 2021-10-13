import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "./app/screens/WeatherScreen";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App Executed");
  StatusBar.setBarStyle("light-content", true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
