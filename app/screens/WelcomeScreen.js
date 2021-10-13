import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash.jpg")}
    >
      <SafeAreaView style={styles.introText}>
        <Text style={styles.title}>Reactive Weather</Text>
        <Text style={styles.subtitle}>Made By Luka Rusadze</Text>
        <Image style={styles.logo} source={require("../assets/icon-3.png")} />
      </SafeAreaView>

      <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
        <View style={styles.continueBtn}>
          <Text style={{ color: "white" }}>Continue</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },

  introText: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    top: 100,
  },

  title: {
    fontSize: 35,
    color: "white",
  },

  subtitle: {
    fontSize: 15,
    color: "white",
  },

  logo: {
    top: 50,
    resizeMode: "contain",
    height: 100,
  },

  continueBtn: {
    backgroundColor: "rgba(120, 120, 120, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
});

export default WelcomeScreen;
